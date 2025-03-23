import Quest from "../models/quest.models.js";

const newQuest = async (req, res) => {
  console.log(req.body);
  try {
    const { name, completedDays } = req.body;
    if (!name) {
      return res.status(400).json({ message: "name not found" });
    }

    const customId = Date.now().toString();

    const newQuest = await Quest.create({
      id: customId,
      name,
      completedDays,
      userId: req.user._id,
    });

    console.log("Quest Created:", newQuest);

    res.status(200).json({ message: "created a quest", newQuest });
  } catch (error) {
    console.error("Error creating quest:", error);
    res.status(400).json({
      message: "error creating a quest",
      error: error.message,
    });
  }
};

const getAllQuests = async (req, res) => {
  console.log(req.body);
  try {
    let options = {};
    const quests = await Quest.find({}, null, options);
    res.status(200).json({
      success: true,
      quests,
      message: "fetched all quests",
    });
  } catch (error) {
    res.status(400).json({
      message: "error finding quests",
    });
  }
};

const getUserQuests = async (req, res) => {
  console.log(req.body);
  try {
    let options = {};
    const quests = await Quest.find({ userId: req.user._id }, null, options);
    res.status(200).json({
      success: true,
      quests,
      message: "fetched all quests",
    });
  } catch (error) {
    res.status(400).json({
      message: "error finding quests",
    });
  }
};

const deleteQuest = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "quest id is required" });
    }

    console.log(id);

    const deletedQuest = await Quest.findByIdAndDelete(id);

    if (!deletedQuest) {
      return res.status(404).json({ message: "quest not found" });
    }

    res.status(200).json({
      success: true,
      deletedQuest,
      message: "quest deleted",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "quest was not deleted",
    });
  }
};

const updateQuest = async (req, res) => {
  try {
    const { id } = req.params; // Get quest ID from URL
    const { name, completedDays } = req.body; // Get updates from request body

    if (!id) {
      return res.status(400).json({ message: "Quest ID is required" });
    }

    // Find the quest by ID
    const quest = await Quest.findById(id);
    if (!quest) {
      return res.status(404).json({ message: "Quest not found" });
    }

    // Convert completedDays to a Map if it exists
    if (completedDays) {
      Object.keys(completedDays).forEach((date) => {
        quest.completedDays.set(date, completedDays[date]); // Store in Map format
      });
    }

    // Update name if it's provided
    if (name) quest.name = name;

    // Save updated quest to database
    const updatedQuest = await quest.save();

    res.status(200).json({
      success: true,
      updatedQuest,
      message: "Quest updated successfully",
    });
  } catch (error) {
    console.error("Error updating quest:", error);
    res.status(400).json({
      success: false,
      message: "Quest was not updated",
      error: error.message,
    });
  }
};

export { newQuest, getUserQuests, deleteQuest, updateQuest };

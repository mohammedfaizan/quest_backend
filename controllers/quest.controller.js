import Quest from "../models/quest.models.js";

const newQuest = async (req, res) => {
  console.log(req.body);
  try {
    const { name, completedDays } = req.body;
    if (!name) {
      return res.status(400).json({ message: "name not found" });
    }

    const customId = Date.now().toString();

    const newQuest = await Quest.create({ id: customId, name, completedDays });

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
    const { id } = req.params;

    const { name, completedDays } = req.body;
    if (!id) {
      return res.status(400).json({ message: "quest id is required" });
    }

    const quest = await Quest.findById(id);

    if (!quest) {
      return res.status(404).json({ message: "quest not found" });
    }

    if (name) quest.name = name;
    if (completedDays) quest.completedDays = completedDays;

    const updatedQuest = await quest.save();

    res.status(200).json({
      success: true,
      updatedQuest,
      message: "quest updated successfullu",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "quest was not updated",
    });
  }
};

export { newQuest, getAllQuests, deleteQuest, updateQuest };

const Video = require('../models/videomodel');

const saveVideo = async (req, res) => {
    try {
      const { title, videoUrl, thumbnail, description } = req.body;
   
      // Validation
      if (!title || !videoUrl || !thumbnail) {
        return res.status(400).json({ message: 'Title, Video URL, and Thumbnail are required.' });
      }
   
      const newVideo = new Video({ title, videoUrl, thumbnail, description });
      await newVideo.save();
   
      res.status(201).json({ message: 'Video saved successfully', video: newVideo });
    } catch (error) {
      console.error('Error saving video:', error);
      res.status(500).json({ message: 'Internal server error', error });
    }
  };
   
  // Get all videos
  const getVideos = async (req, res) => {
    try {
      const videos = await Video.find();
      res.status(200).json(videos);
    } catch (error) {
      console.error('Error fetching videos:', error);
      res.status(500).json({ message: 'Internal server error', error });
    }
  };
   
  // Get video by ID
  const getVideoById = async (req, res) => {
    try {
      const { id } = req.params;
   
      const video = await Video.findById(id);
   
      if (!video) {
        return res.status(404).json({ message: 'Video not found' });
      }
   
      res.status(200).json(video);
    } catch (error) {
      console.error('Error fetching video:', error);
      res.status(500).json({ message: 'Internal server error', error });
    }
  };
   
  // Update video details
  const updateVideo = async (req, res) => {
    try {
      const { id } = req.params;
      const { title, videoUrl, thumbnail, description } = req.body;
   
      const updatedVideo = await Video.findByIdAndUpdate(
        id,
        { title, videoUrl, thumbnail, description },
        { new: true, runValidators: true }
      );
   
      if (!updatedVideo) {
        return res.status(404).json({ message: 'Video not found' });
      }
   
      res.status(200).json({ message: 'Video updated successfully', video: updatedVideo });
    } catch (error) {
      console.error('Error updating video:', error);
      res.status(500).json({ message: 'Internal server error', error });
    }
  };
   
  // Delete video
  const deleteVideo = async (req, res) => {
    try {
      const { id } = req.params;
   
      const deletedVideo = await Video.findByIdAndDelete(id);
   
      if (!deletedVideo) {
        return res.status(404).json({ message: 'Video not found' });
      }
   
      res.status(200).json({ message: 'Video deleted successfully' });
    } catch (error) {
      console.error('Error deleting video:', error);
      res.status(500).json({ message: 'Internal server error', error });
    }
  };
   
  module.exports = {
    saveVideo,
    getVideos,
    getVideoById,
    updateVideo,
    deleteVideo,
  };
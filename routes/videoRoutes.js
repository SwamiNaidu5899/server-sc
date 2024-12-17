const express = require('express');
const {
  saveVideo,
  getVideos,
  getVideoById,
  updateVideo,
  deleteVideo,
} = require('../controllers/videoController');
 
const router = express.Router();
 
// POST route to save video details
router.post('/save-video', saveVideo);
 
// GET route to fetch all videos
router.get('/', getVideos);
 
// GET route to fetch a single video by ID
router.get('/:id', getVideoById);
 
// PUT route to update video details
router.put('/:id', updateVideo);
 
// DELETE route to delete a video
router.delete('/:id', deleteVideo);
 
module.exports = router;
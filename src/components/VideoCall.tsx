import React, { useState } from 'react';
import { Video, VideoOff, Mic, MicOff, PhoneOff, Monitor, Phone } from 'lucide-react';

const VideoCall = () => {
  const [isCalling, setIsCalling] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isMicOn, setIsMicOn] = useState(true);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const toggleCall = () => setIsCalling(!isCalling);
  const toggleVideo = () => setIsVideoOn(!isVideoOn);
  const toggleMic = () => setIsMicOn(!isMicOn);
  const toggleScreenShare = () => setIsScreenSharing(!isScreenSharing);

 return (
    <div className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
      {/* 1. THE SCREEN AREA */}
      <div className="relative aspect-video bg-black flex items-center justify-center">
        {!isCalling ? (
          <div className="text-center text-white">
            <div className="bg-gray-800 p-8 rounded-full inline-block mb-4">
              <Video size={48} className="text-gray-400" />
            </div>
            <h3 className="text-xl font-medium">Ready to join the meeting?</h3>
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white">
             {isVideoOn ? "--- Your Video Feed (Mock) ---" : "Camera is Off"}
          </div>
        )}
      </div>

      {/* 2. THE CONTROL BAR (Buttons) */}
      <div className="p-6 flex justify-center items-center space-x-4 bg-gray-800">
        <button onClick={toggleMic} className={`p-4 rounded-full ${isMicOn ? 'bg-gray-700' : 'bg-red-500'} text-white`}>
          {isMicOn ? <Mic size={24} /> : <MicOff size={24} />}
        </button>
        
        <button onClick={toggleVideo} className={`p-4 rounded-full ${isVideoOn ? 'bg-gray-700' : 'bg-red-500'} text-white`}>
          {isVideoOn ? <Video size={24} /> : <VideoOff size={24} />}
        </button>

        <button onClick={toggleCall} className={`px-8 py-4 rounded-full font-bold text-white ${isCalling ? 'bg-red-600' : 'bg-green-600'}`}>
          {isCalling ? <><PhoneOff className="inline mr-2" /> End Call</> : <><Phone className="inline mr-2" /> Start Call</>}
        </button>
        <button 
          onClick={toggleScreenShare} 
          className={`p-4 rounded-full ${isScreenSharing ? 'bg-blue-500' : 'bg-gray-700'} text-white`}
          title="Share Screen"
        >
          <Monitor size={24} />
        </button>
      </div>
    </div>
  );
};

export default VideoCall;
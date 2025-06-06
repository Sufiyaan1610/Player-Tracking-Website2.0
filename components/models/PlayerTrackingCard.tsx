"use client";
import { Move3D } from "lucide-react";

export default function PlayerTrackingCard() {
    return (
        <div
            onClick={() => window.location.href = "/models/player-tracking"}
            className="relative group bg-white/5 border border-yellow-500/30 backdrop-blur-md shadow-lg rounded-2xl p-6 max-w-sm w-full cursor-pointer transition-all duration-300 hover:scale-105 hover:border-yellow-400"
        >
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-yellow-400/10 border border-yellow-400 mb-4 mx-auto">
                <Move3D className="w-6 h-6 text-yellow-400" />
            </div>
            <h2 className="text-xl font-bold text-yellow-400 mb-2 text-center">Player Tracking</h2>
            <p className="text-sm text-gray-300 text-center">
                Monitor player movement, positioning, and performance using AI-powered video tracking.
            </p>
            <div className="flex gap-2 mt-4 justify-center">
                <span className="bg-yellow-400 text-black text-xs px-2 py-1 rounded">AI Model</span>
                <span className="bg-yellow-400 text-black text-xs px-2 py-1 rounded">Live</span>
            </div>
        </div>
    );
}

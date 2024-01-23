"use client"
import React from 'react'
import ReactPlayer from "react-player";

export default function Player() {
  return (
    <ReactPlayer 
    height="100vh"
    width="100vw"
    playing muted url='/bg2.mp4' />
  )
}

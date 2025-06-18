"use client"

import { useRef, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Camera, RotateCcw } from "lucide-react"
import { useLanguage } from "@/app/page"

interface CameraInterfaceProps {
  onCapture: (imageData: string) => void
}

export default function CameraInterface({ onCapture }: CameraInterfaceProps) {
  const { t } = useLanguage()
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [stream, setStream] = useState<MediaStream | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    startCamera()
    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop())
      }
    }
  }, [])

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: { ideal: 1280 },
          height: { ideal: 720 },
          facingMode: "environment",
        },
      })
      setStream(mediaStream)
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream
      }
      setError(null)
    } catch (err) {
      setError(t("cameraError"))
      console.error("Camera error:", err)
    }
  }

  const captureImage = () => {
    if (videoRef.current && canvasRef.current) {
      const canvas = canvasRef.current
      const video = videoRef.current
      const context = canvas.getContext("2d")

      if (context) {
        canvas.width = video.videoWidth
        canvas.height = video.videoHeight
        context.drawImage(video, 0, 0)

        const imageData = canvas.toDataURL("image/jpeg", 0.8)
        onCapture(imageData)
      }
    }
  }

  if (error) {
    return (
      <Card className="max-w-2xl mx-auto border-2 border-red-200">
        <CardContent className="p-8 text-center">
          <div className="text-red-600 mb-4">
            <Camera className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">{t("cameraAccessTitle")}</h2>
            <p>{error}</p>
          </div>
          <Button onClick={startCamera} className="bg-blue-600 hover:bg-blue-700">
            <RotateCcw className="w-4 h-4 mr-2" />
            {t("tryAgain")}
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-2">{t("positionTitle")}</h2>
        <p className="text-blue-700">{t("positionDesc")}</p>
      </div>

      <Card className="max-w-2xl mx-auto border-2 border-blue-200 overflow-hidden">
        <CardContent className="p-0 relative">
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="w-full h-auto bg-black"
            style={{ aspectRatio: "16/9" }}
          />

          {/* Overlay guide */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="border-4 border-blue-400 border-dashed rounded-lg w-64 h-64 flex items-center justify-center bg-blue-500/10">
              <span className="text-blue-600 font-semibold bg-white/90 px-3 py-1 rounded">{t("positionGuide")}</span>
            </div>
          </div>

          {/* Capture button */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
            <Button
              onClick={captureImage}
              size="lg"
              className="w-16 h-16 rounded-full bg-blue-600 hover:bg-blue-700 border-4 border-white shadow-lg"
            >
              <Camera className="w-8 h-8" />
            </Button>
          </div>
        </CardContent>
      </Card>

      <canvas ref={canvasRef} className="hidden" />
    </div>
  )
}

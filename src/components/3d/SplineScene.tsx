import React, { Suspense } from 'react';
import Spline from '@splinetool/react-spline';

interface SplineSceneProps {
  scene: string;
  className?: string;
}

const SplineScene = ({ scene, className = '' }: SplineSceneProps) => {
  return (
    <div className={`spline-wrapper ${className}`}>
      {/* Overlay strip at the very bottom to cover the "Built with Spline" watermark */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '48px',
          background: 'transparent',
          zIndex: 10,
          pointerEvents: 'none',
        }}
      />
      {/* Extra clip to hide watermark via backdrop */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '48px',
          backgroundColor: 'inherit',
          zIndex: 20,
          pointerEvents: 'none',
        }}
        className="bg-background"
      />
      <Suspense fallback={
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-10 h-10 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
        </div>
      }>
        <Spline scene={scene} style={{ width: '100%', height: '100%' }} />
      </Suspense>
    </div>
  );
};

export default SplineScene;

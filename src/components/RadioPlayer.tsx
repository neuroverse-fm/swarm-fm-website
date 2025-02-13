import { h } from 'preact';
import { useRadio } from '../utils/RadioContext';

export function RadioPlayer() {
  const { isPlaying, setIsPlaying } = useRadio();

  return (
    <div class="fixed bottom-4 right-4 bg-white shadow-lg p-4 rounded-lg">
      <iframe
        width="200"
        height="113"
        src="https://www.youtube.com/embed/thCiTnOzkOM?si=LlFrH7edRIqNnFJQ"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
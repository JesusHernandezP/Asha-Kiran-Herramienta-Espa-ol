/**
 * Utility to perform text-to-speech in Spanish.
 * Uses the native browser Web Speech API.
 */
export function speakSpanish(text: string) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    console.warn('Text-to-Speech not supported in this environment.');
    return;
  }

  try {
    // Cancel any ongoing speech to avoid overlapping
    window.speechSynthesis.cancel();

    // Clean up text if it contains HTML/Markdown markup (e.g. bold marks)
    const cleanedText = text
      .replace(/[\*\_\`\>]/g, '') // remove markdown symbols
      .replace(/<[^>]*>/g, '')    // remove HTML tags if any
      .trim();

    if (!cleanedText) return;

    const utterance = new SpeechSynthesisUtterance(cleanedText);
    utterance.lang = 'es-ES'; // Spanish (Spain)
    utterance.rate = 0.85;    // Slower rate for clear pronunciation and learning

    // Explicitly search for a Spanish voice if possible
    const voices = window.speechSynthesis.getVoices();
    const spanishVoice = voices.find(voice => 
      voice.lang.includes('es-ES') || 
      voice.lang.includes('es_ES') || 
      voice.lang.startsWith('es')
    );

    if (spanishVoice) {
      utterance.voice = spanishVoice;
    }

    window.speechSynthesis.speak(utterance);
  } catch (error) {
    console.error('Error during Speech Synthesis:', error);
  }
}

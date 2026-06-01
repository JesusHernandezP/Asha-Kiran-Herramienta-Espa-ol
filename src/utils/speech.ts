/**
 * Utility to perform text-to-speech in Spanish.
 * Uses the native browser Web Speech API.
 */

// Pre-fetch voices as early as possible to fix Chrome's asynchronous load issue
if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  window.speechSynthesis.getVoices();
  if (window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = () => {
      window.speechSynthesis.getVoices();
    };
  }
}

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
    utterance.lang = 'es-ES'; // Explicitly set language tag to Spanish (Spain)
    utterance.rate = 0.85;    // Slower rate for clear pronunciation and learning

    // Retrieve loaded voices
    const voices = window.speechSynthesis.getVoices();
    
    // Strictly prioritize Spain (es-ES) native voices
    const spanishVoice = 
      // 1. Try to find native Spain Spanish voices from Google or Microsoft (Helena, Laura, Pablo, etc.)
      voices.find(v => v.lang === 'es-ES' && (
        v.name.toLowerCase().includes('helena') ||
        v.name.toLowerCase().includes('laura') ||
        v.name.toLowerCase().includes('pablo') ||
        v.name.toLowerCase().includes('google') ||
        v.name.toLowerCase().includes('spain') ||
        v.name.toLowerCase().includes('españa')
      )) ||
      // 2. Any es-ES voice
      voices.find(v => v.lang === 'es-ES' || v.lang === 'es_ES') ||
      voices.find(v => v.lang.includes('es-ES') || v.lang.includes('es_ES')) ||
      // 3. Fallback to other Spanish locales (MX, US, etc.) if es-ES is not present
      voices.find(v => v.lang.startsWith('es-') || v.lang.startsWith('es_')) ||
      voices.find(v => v.lang.startsWith('es'));

    if (spanishVoice) {
      utterance.voice = spanishVoice;
    }

    window.speechSynthesis.speak(utterance);
  } catch (error) {
    console.error('Error during Speech Synthesis:', error);
  }
}


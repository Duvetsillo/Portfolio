# Aetherion Studio — portfolio update

Date: 2026-10-04 (America/La_Paz).

The existing featured Aetherion project now includes the native Qt 6 / PySide6 redesign. Its gallery contains four existing web captures and ten desktop captures: workspace, models, benchmark, results, history, hardware, settings, sign-in, registration and downloads. Both Spanish and English descriptions were updated, including the project catalog technology.

Workspace is a real screenshot from the owner’s machine with six detected Ollama models. All other desktop captures were rendered from implemented Qt widgets using temporary UI TEST FIXTURE data. Gallery labels explicitly distinguish those captures. They do not represent real benchmark history or production monitoring data.

Verification of the client: 63 tests passed, scoped lint passed, final Windows executable startup/normal close checked. Seven views were checked at five logical sizes and simulated display scales 100%, 125%, 150%, 200%. Actual multi-monitor transitions were not tested. A real Ollama math task completed; the model answer failed its one validation check (0/1), so execution completion is not presented as model correctness. GGUF requires llama-cpp-python and must be bundled for frozen inference.

The portfolio contains screenshots and project descriptions, not the 55 MB desktop executable, private sessions, credentials or temporary task reports.

Portfolio verification: all 14 gallery assets load; Spanish/English copy, arrow-key navigation, Escape and focus restoration checked. No browser errors reported. Desktop (1440×1400) and mobile (390×844) inspected; mobile has no horizontal overflow. Both modified JavaScript files pass node --check and git diff --check passes. See aetherion-studio-verification.json and the desktop/mobile captures. Changes remain in the local working tree.

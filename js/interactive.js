document.addEventListener('DOMContentLoaded', function() {
    
    // Interactive typography tools data
    const interactiveToolsData = [
        { name: 'TouchDesigner', platform: 'Windows/macOS', category: 'Visual Programming', strengths: 'Real-time audio/visuals, node-based, interactive', url: 'https://derivative.ca/', tags: 'real-time, node-based, interactive', description: 'A powerful visual development platform for building interactive media systems, installations, and shows.' },
        { name: 'Notch', platform: 'Windows', category: 'Visual Programming / Real-time Graphics', strengths: 'Real-time 3D, motion graphics, audio/MIDI reactive', url: 'https://www.notch.one/', tags: 'real-time, VFX, motion graphics', description: 'A real-time graphics tool used in concerts, broadcast, and installations with node-based workflows and high-performance rendering.' },
        { name: 'vvvv gamma', platform: 'Windows', category: 'Visual Programming', strengths: 'Real-time visuals, interactive logic systems', url: 'https://visualprogramming.net/', tags: 'node-based, realtime, logic', description: 'A hybrid visual/textual live-programming environment for real-time media, interaction, and physical computing.' },
        { name: 'Max/MSP + Jitter', platform: 'Windows/macOS', category: 'Audio-Visual Programming', strengths: 'Audio/visual patching, reactive visuals', url: 'https://cycling74.com/', tags: 'audio, visual, patch-based', description: 'A visual programming language for music and multimedia with extensive support for interactivity and audio-visual integration.' },
        { name: 'Smode Studio', platform: 'Windows', category: 'Real-time Compositing', strengths: 'Layer-based VFX, procedural text animation', url: 'https://smode.io/', tags: 'real-time, VFX, compositing', description: 'Real-time compositing and media server tool designed for live shows, with support for dynamic visuals and data-driven graphics.' },
        { name: 'Resolume Arena', platform: 'Windows/macOS', category: 'VJing / Live Performance', strengths: 'Real-time video mixing, text generation, audio reactive', url: 'https://resolume.com/', tags: 'VJing, live, visuals', description: 'A tool for live visual performance that allows mixing and manipulating video and effects in real time, including text layers.' },
        { name: 'Cables.gl', platform: 'Browser', category: 'WebGL Visual Programming', strengths: 'Node-based, browser-based interactive visuals', url: 'https://cables.gl/', tags: 'WebGL, node-based, browser', description: 'A visual programming environment for the web that allows you to create interactive graphics using WebGL with real-time editing.' },
        { name: 'Isadora', platform: 'Windows/macOS', category: 'Interactive Media for Theater', strengths: 'Real-time input, performance, visuals', url: 'https://troikatronix.com/', tags: 'interactive, performance, visuals', description: 'A media control software designed for artists and performers, integrating media playbook and live input into visual scenes.' },
        { name: 'Modul8', platform: 'macOS', category: 'VJing / Projection Mapping', strengths: 'Real-time visuals, text overlays', url: 'https://garagecube.com/modul8/', tags: 'VJing, projection, mapping', description: 'A modular video mixing tool designed for live performance with strong layering, masking, and text support.' }
    ];

    function renderInteractiveTools() {
        const grid = document.getElementById('interactiveToolsGrid');
        if (!grid) return;
        
        const categoryColors = {
            'Visual Programming': { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700', badge: 'bg-blue-100' },
            'Visual Programming / Real-time Graphics': { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-700', badge: 'bg-purple-100' },
            'Audio-Visual Programming': { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-700', badge: 'bg-green-100' },
            'Real-time Compositing': { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-700', badge: 'bg-orange-100' },
            'VJing / Live Performance': { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-700', badge: 'bg-red-100' },
            'WebGL Visual Programming': { bg: 'bg-teal-50', border: 'border-teal-200', text: 'text-teal-700', badge: 'bg-teal-100' },
            'Interactive Media for Theater': { bg: 'bg-pink-50', border: 'border-pink-200', text: 'text-pink-700', badge: 'bg-pink-100' },
            'VJing / Projection Mapping': { bg: 'bg-indigo-50', border: 'border-indigo-200', text: 'text-indigo-700', badge: 'bg-indigo-100' }
        };
        
        grid.innerHTML = interactiveToolsData.map(tool => {
            const colors = categoryColors[tool.category] || categoryColors['Visual Programming'];
            const categorySlug = tool.category.toLowerCase().replace(/[\s\/]+/g, '-');
            return `
                <div class="interactive-tool-card tool-card ${colors.bg} rounded-2xl shadow-sm border ${colors.border} overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1" data-category="${categorySlug}" data-search="${tool.name} ${tool.description} ${tool.tags} ${tool.category} ${tool.platform}">
                    <div class="p-6">
                        <div class="flex justify-between items-start mb-3">
                            <h3 class="font-bold text-lg ${colors.text}">${tool.name}</h3>
                            <span class="text-xs font-semibold px-2 py-1 rounded-full ${colors.badge} ${colors.text}">${tool.platform}</span>
                        </div>
                        <div class="mb-3">
                            <span class="text-xs font-semibold uppercase px-2 py-1 rounded-full bg-slate-100 text-slate-600">${tool.category}</span>
                        </div>
                        <p class="text-slate-600 text-sm mb-3 leading-relaxed">${tool.description}</p>
                        <div class="mb-4">
                            <h4 class="text-xs font-semibold text-slate-500 uppercase mb-1">Key Strengths:</h4>
                            <p class="text-sm ${colors.text} font-medium">${tool.strengths}</p>
                        </div>
                        <a href="${tool.url}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 ${colors.text} hover:underline font-medium text-sm">
                            <i class="fas fa-external-link-alt"></i>
                            Visit Tool
                        </a>
                    </div>
                </div>
            `;
        }).join('');
    }

    // Initialize the page
    renderInteractiveTools();
    
    // Setup filter functionality
    setupFilter('interactiveSearchInput', '#interactiveToolsGrid', '.interactive-tool-card', 'interactive-filter-buttons');
});
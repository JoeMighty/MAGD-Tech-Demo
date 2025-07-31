document.addEventListener('DOMContentLoaded', function() {
    
    // Emerging tools data
    const emergingToolsData = [
        { name: 'Runway ML', description: 'AI-powered video and motion tool with Gen-3 Alpha, used for filmmaking, content creation, and style transfer.', url: 'https://runwayml.com', category: 'ai-video', tags: 'ai video motion filmmaking' },
        { name: 'Dream Machine', description: 'AI video model by Luma Labs, generates realistic motion from prompts. Competes with Runway.', url: 'https://lumalabs.ai/dream-machine', category: 'ai-video', tags: 'ai video motion realistic' },
        { name: 'Pika', description: 'Text/image to video AI generator. Supports style transfer and smooth motion transitions.', url: 'https://pika.art', category: 'ai-video', tags: 'ai video text-to-video style-transfer' },
        { name: 'Sora (by OpenAI)', description: 'Experimental long-form video generation AI, capable of detailed, coherent scenes.', url: 'https://openai.com/sora', category: 'ai-video', tags: 'ai video openai experimental long-form' },
        { name: 'Vizcom', description: 'Sketch-to-render tool for product and industrial designers. Fast, high-quality rendering.', url: 'https://www.vizcom.ai', category: 'ai-image', tags: 'sketch render product industrial design' },
        { name: 'CreatiPoster', description: 'Generates editable, multi-layered design compositions. Useful for print, social, and motion graphics.', url: 'https://arxiv.org/abs/2506.10890', category: 'ai-image', tags: 'poster design print social motion' },
        { name: 'Flux.1 Kontext', description: 'Expressive AI text-to-image model with depth, edge, and inpainting controls.', url: 'https://bfl.ai', category: 'ai-image', tags: 'ai text-to-image depth edge inpainting' },
        { name: 'Moonchild.ai', description: 'AI ideation engine for product/campaign ideas. Outputs Figma-ready UX concepts.', url: 'https://moonchild.ai', category: 'ui-ux', tags: 'ai ideation product campaign figma ux' },
        { name: 'Uizard', description: 'Sketch-to-UI prototyping tool. Converts notes or drawings into working app layouts.', url: 'https://uizard.io', category: 'ui-ux', tags: 'sketch ui prototyping app layouts' },
        { name: 'Recraft', description: 'AI illustration and design tool with editable SVGs, brand-consistent outputs.', url: 'https://recraft.ai', category: 'ai-image', tags: 'ai illustration svg brand design' },
        { name: 'Vectary', description: '3D design platform in browser for mockups and typography. Collaborates well with Adobe apps.', url: 'https://www.vectary.com', category: '3d', tags: '3d browser mockups typography adobe' },
        { name: 'Adobe Aero', description: 'Tool to create interactive AR experiences from 2D designs. Works with Adobe ecosystem.', url: 'https://www.adobe.com/products/aero.html', category: '3d', tags: 'ar interactive adobe 2d designs' },
        { name: 'Penpot', description: 'Open-source UI/UX design tool, real-time collaboration, Figma alternative.', url: 'https://penpot.app', category: 'open-source', tags: 'open-source ui ux collaboration figma alternative' },
        { name: 'Affinity Designer 2', description: 'Vector + raster design tool with one-time pricing, Illustrator alternative.', url: 'https://affinity.serif.com', category: 'design-tools', tags: 'vector raster one-time pricing illustrator alternative' },
        { name: 'Affinity Photo 2', description: 'Professional raster editor with advanced photo features. No subscription.', url: 'https://affinity.serif.com', category: 'design-tools', tags: 'raster photo editor professional no subscription' },
        { name: 'Affinity Publisher 2', description: 'Page layout tool with seamless switching between Designer and Photo.', url: 'https://affinity.serif.com', category: 'design-tools', tags: 'page layout designer photo seamless' },
        { name: 'CorelDRAW Graphics Suite 2025', description: 'Full vector/photo editing suite. Offers traditional license or subscription.', url: 'https://www.coreldraw.com', category: 'design-tools', tags: 'vector photo editing suite license subscription' },
        { name: 'CorelDRAW Go', description: 'Web-based entry-level design tool by Corel. Accessible and cloud-native.', url: 'https://www.coreldraw.com/en/pages/go/', category: 'design-tools', tags: 'web entry-level corel cloud-native' },
        { name: 'Blender', description: 'Open-source 3D/2D tool for modeling, animation, visual effects, Grease Pencil.', url: 'https://www.blender.org', category: 'open-source', tags: 'open-source 3d 2d modeling animation visual effects' },
        { name: 'Gravit Designer', description: 'Vector editor with cloud sync, for layout, illustration, and icons.', url: 'https://www.designer.io', category: 'design-tools', tags: 'vector editor cloud sync layout illustration icons' },
        { name: 'Sketch', description: 'macOS UI/UX design tool with plugins and real-time design libraries.', url: 'https://www.sketch.com', category: 'ui-ux', tags: 'macos ui ux plugins design libraries' },
        { name: 'Inkscape', description: 'Free vector editor supporting mesh gradients, live path effects, SVG export.', url: 'https://inkscape.org', category: 'open-source', tags: 'free vector editor mesh gradients path effects svg' },
        { name: 'GIMP', description: 'Free image editor for raster graphics and design, supports plugins and layers.', url: 'https://www.gimp.org', category: 'open-source', tags: 'free image editor raster graphics plugins layers' },
        { name: 'Photopea', description: 'Web-based Photoshop alternative. Supports PSD, no install required.', url: 'https://www.photopea.com', category: 'design-tools', tags: 'web photoshop alternative psd no install' },
        { name: 'Procreate', description: 'iPad-only illustration tool with responsive brush engine, no subscription.', url: 'https://procreate.com', category: 'design-tools', tags: 'ipad illustration brush engine no subscription' },
        { name: 'VistaCreate', description: 'Design platform for social graphics and animations, beginner-friendly templates.', url: 'https://create.vista.com', category: 'design-tools', tags: 'social graphics animations beginner templates' }
    ];

    function renderEmergingTools() {
        const grid = document.getElementById('emergingToolsGrid');
        if (!grid) return;
        
        const categoryColors = {
            'ai-video': { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-700', badge: 'bg-purple-100' },
            'ai-image': { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700', badge: 'bg-blue-100' },
            'ui-ux': { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-700', badge: 'bg-green-100' },
            '3d': { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-700', badge: 'bg-orange-100' },
            'open-source': { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-700', badge: 'bg-red-100' },
            'design-tools': { bg: 'bg-slate-50', border: 'border-slate-200', text: 'text-slate-700', badge: 'bg-slate-100' }
        };
        
        grid.innerHTML = emergingToolsData.map(tool => {
            const colors = categoryColors[tool.category] || categoryColors['design-tools'];
            return `
                <div class="emerging-tool-card tool-card ${colors.bg} rounded-2xl shadow-sm border ${colors.border} overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1" data-category="${tool.category}" data-search="${tool.name} ${tool.description} ${tool.tags}">
                    <div class="p-6">
                        <div class="flex justify-between items-start mb-3">
                            <h3 class="font-bold text-lg ${colors.text}">${tool.name}</h3>
                            <span class="text-xs font-semibold uppercase px-2 py-1 rounded-full ${colors.badge} ${colors.text}">${tool.category.replace('-', ' ')}</span>
                        </div>
                        <p class="text-slate-600 text-sm mb-4 leading-relaxed">${tool.description}</p>
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
    renderEmergingTools();
    
    // Setup filter functionality
    setupFilter('emergingSearchInput', '#emergingToolsGrid', '.emerging-tool-card', 'emerging-filter-buttons');
});
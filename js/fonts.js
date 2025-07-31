document.addEventListener('DOMContentLoaded', function() {
    
    // Font data
    const fontData = [
        { name: 'Glyphs', url: 'https://glyphsapp.com', platform: ['macos'], price: '€300', type: 'Desktop', notes: 'Professional, industry standard', tags: 'macos paid desktop professional' },
        { name: 'Glyphs Mini', url: 'https://glyphsapp.com', platform: ['macos'], price: '€40', type: 'Desktop', notes: 'Affordable entry version', tags: 'macos paid desktop beginner' },
        { name: 'RoboFont', url: 'https://robofont.com', platform: ['macos'], price: '€500', type: 'Desktop', notes: 'Modular, scriptable', tags: 'macos paid desktop professional scriptable' },
        { name: 'FontLab', url: 'https://www.fontlab.com', platform: ['macos', 'windows'], price: '€500', type: 'Desktop', notes: 'Full-featured professional tool', tags: 'macos windows paid desktop professional' },
        { name: 'FontForge', url: 'https://fontforge.github.io', platform: ['windows', 'macos', 'linux'], price: 'Free', type: 'Desktop', notes: 'Powerful, steeper learning curve', tags: 'windows macos linux free desktop opensource' },
        { name: 'BirdFont', url: 'https://birdfont.org', platform: ['windows', 'macos', 'linux'], price: 'Free', type: 'Desktop', notes: 'User-friendly, great for beginners', tags: 'windows macos linux free desktop beginner' },
        { name: 'FontSelf', url: 'https://www.fontself.com/store', platform: ['windows', 'macos', 'ipad'], price: '€40–80', type: 'Plugin/App', notes: 'Easy font creation in Illustrator', tags: 'windows macos ipad paid plugin illustrator' },
        { name: 'Glyphr Studio', url: 'https://www.glyphrstudio.com', platform: ['web'], price: 'Free', type: 'Web', notes: 'Great free option', tags: 'web free' },
        { name: 'FontStruct', url: 'https://fontstruct.com', platform: ['web'], price: 'Free', type: 'Web', notes: 'Grid-based font design', tags: 'web free grid-based' },
        { name: 'Calligraphr', url: 'https://www.calligraphr.com/en/pricing/', platform: ['web'], price: 'Freemium', type: 'Web', notes: 'Handwriting to font conversion', tags: 'web freemium handwriting' },
        { name: 'FontCreator', url: 'https://www.high-logic.com/', platform: ['windows'], price: '€50–200', type: 'Desktop', notes: 'Feature-rich, Windows only', tags: 'windows paid desktop feature-rich' },
    ];

    // Recommendation data
    const recommendationData = [
        { icon: 'fas fa-seedling', color: 'green', title: 'Beginners', items: ['BirdFont', 'FontStruct', 'Glyphr Studio', 'Calligraphr'] },
        { icon: 'fab fa-adobe', color: 'red', title: 'Adobe Users', items: ['FontSelf for Illustrator integration'] },
        { icon: 'fab fa-apple', color: 'slate', title: 'Mac (Advanced)', items: ['Glyphs Mini for entry-level pro', 'RoboFont for scripting'] },
        { icon: 'fab fa-windows', color: 'blue', title: 'Windows (Advanced)', items: ['FontCreator for rich features', 'FontLab for pro work'] },
        { icon: 'fab fa-osi', color: 'orange', title: 'Open Source Fans', items: ['FontForge for a powerful free tool'] },
        { icon: 'fas fa-dollar-sign', color: 'yellow', title: 'Budget-Conscious', items: ['Many free options', 'Paid tools under €50'] },
    ];

    function renderFontTable() {
        const tableBody = document.querySelector('#fontTable tbody');
        if (!tableBody) return;
        
        tableBody.innerHTML = fontData.map(font => `
            <tr class="border-b border-slate-200 hover:bg-slate-50 transition-colors duration-150" data-tags="${font.tags}">
                <td class="p-4 font-semibold"><a href="${font.url}" target="_blank" rel="noopener" class="text-indigo-600 hover:underline">${font.name}</a></td>
                <td class="p-4">
                    ${font.platform.map(p => `<span class="inline-block text-xs font-bold mr-1 px-2.5 py-0.5 rounded-full ${p === 'macos' ? 'bg-slate-200 text-slate-800' : p === 'windows' ? 'bg-blue-200 text-blue-800' : p === 'linux' ? 'bg-orange-200 text-orange-800' : p === 'web' ? 'bg-green-200 text-green-800' : 'bg-gray-200 text-gray-800'}">${p.charAt(0).toUpperCase() + p.slice(1)}</span>`).join('')}
                </td>
                <td class="p-4"><span class="font-semibold ${font.price === 'Free' ? 'text-green-600' : 'text-slate-700'}">${font.price}</span></td>
                <td class="p-4 text-slate-600 hidden md:table-cell">${font.notes}</td>
            </tr>
        `).join('');
    }

    function renderRecommendations() {
        const recGrid = document.querySelector('.recommendations-grid');
        if (!recGrid) return;
        
        const colorClasses = {
            green: 'text-green-500 bg-green-50 border-green-200',
            red: 'text-red-500 bg-red-50 border-red-200',
            slate: 'text-slate-500 bg-slate-50 border-slate-200',
            blue: 'text-blue-500 bg-blue-50 border-blue-200',
            orange: 'text-orange-500 bg-orange-50 border-orange-200',
            yellow: 'text-yellow-500 bg-yellow-50 border-yellow-200',
        };
        
        recGrid.innerHTML = recommendationData.map(rec => `
            <div class="bg-white p-6 rounded-xl border ${colorClasses[rec.color]}">
                <i class="${rec.icon} text-3xl mb-3"></i>
                <h3 class="text-lg font-bold mb-2">${rec.title}</h3>
                <ul class="text-sm text-slate-600 space-y-1 list-disc list-inside">
                    ${rec.items.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        `).join('');
    }

    // Initialize the page
    renderFontTable();
    renderRecommendations();
    
    // Setup filter functionality
    setupFilter('fontSearchInput', '#fontTable tbody', '#fontTable tbody tr', 'font-filter-buttons');
});
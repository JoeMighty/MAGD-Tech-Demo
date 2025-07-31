document.addEventListener('DOMContentLoaded', function() {
    
    // Expression data
    const expressionData = [
        { category: 'basic', title: 'Continuous Spin', code: 'time * 45', desc: 'Rotates the object 45° per second.', usage: 'Rotation' },
        { category: 'basic', title: 'Random Jitter', code: 'wiggle(2, 30)', desc: '2 wiggles/sec, 30px/degree range.', usage: 'Position, Rotation, Scale' },
        { category: 'loops', title: 'Seamless Loop', code: 'loopOut("cycle")', desc: 'Loops keyframes in a perfect cycle.', usage: 'Any property with 2+ keyframes' },
        { category: 'loops', title: 'Ping Pong Loop', code: 'loopOut("pingpong")', desc: 'Moves back and forth between keyframes.', usage: 'Any property with keyframes' },
        { category: 'effects', title: 'Smooth Fade', code: 'Math.sin(time * 2) * 50 + 50', desc: 'Gentle fade in/out loop (0-100%).', usage: 'Opacity' },
        { category: 'effects', title: 'Breathing Effect', code: 's = Math.sin(time * 3) * 20 + 100; [s, s]', desc: 'Makes object pulse (80-120% scale).', usage: 'Scale' },
        { category: 'basic', title: 'Floating Motion', code: 'y = Math.sin(time * 2) * 10; value + [0, y]', desc: 'Adds gentle up and down movement.', usage: 'Position' },
        { category: 'advanced', title: 'Sequence Delay', code: 'valueAtTime(time - index * 0.2)', desc: 'Delays animation for each layer.', usage: 'Any animated property' },
        { category: 'advanced', title: 'Unique Wiggle', code: 'seedRandom(index, true); wiggle(1, 20)', desc: 'Each layer wiggles differently.', usage: 'Position' },
        { category: 'effects', title: 'Blinking Effect', code: 'Math.floor(time % 1) == 0 ? 100 : 0', desc: 'On/off blinking once per second.', usage: 'Opacity' },
        { category: 'advanced', title: 'Layer Link', code: 'thisComp.layer("Null 1").transform.position', desc: 'Links property to another layer.', usage: 'Any transform property' },
        { category: 'loops', title: 'Offset Loop', code: 'loopOut("offset")', desc: 'Repeats movement with offset.', usage: 'Position, Rotation, Scale' },
        { category: 'basic', title: 'Scale to Beat', code: 'linear(time, 0, 1, 100, 110)', desc: 'Scales from 100% to 110% over 1 second.', usage: 'Scale' },
        { category: 'effects', title: 'Color Flash', code: 'time % 2 < 1 ? [1, 0, 0, 1] : [0, 0, 1, 1]', desc: 'Alternates between red and blue every 2 seconds.', usage: 'Color properties' },
        { category: 'advanced', title: 'Distance Control', code: 'dist = length(position, [960, 540]); linear(dist, 0, 500, 100, 0)', desc: 'Opacity based on distance from center.', usage: 'Opacity' },
        { category: 'basic', title: 'Time Remap', code: 'time % comp("Comp 1").duration', desc: 'Loops composition duration.', usage: 'Time Remap' },
        { category: 'effects', title: 'Typewriter Effect', code: 'Math.min(text.sourceText.length, Math.floor(time * 10))', desc: 'Reveals text character by character.', usage: 'Source Text (with substring)' },
        { category: 'loops', title: 'Bounce Loop', code: 'n = 4; if (numKeys > 0) { n = nearestKey(time).index; if (key(n).time > time) n--; } if (n > 0) { t = time - key(n).time; amp = velocityAtTime(key(n).time - 0.001); freq = 3; decay = 5; value + amp * Math.sin(freq * t * 2 * Math.PI) / Math.exp(decay * t); } else { value; }', desc: 'Creates bouncing decay after keyframes.', usage: 'Position, Scale' },
        { category: 'advanced', title: 'Audio React', code: 'thisComp.layer("Audio").audioLevels()[0] * 100', desc: 'Reacts to audio amplitude.', usage: 'Scale, Position, Opacity' },
        { category: 'effects', title: 'Strobe Light', code: 'Math.round(time * 10) % 2 == 0 ? 100 : 0', desc: 'Fast on/off strobe effect.', usage: 'Opacity' }
    ];

    function renderExpressions() {
        const grid = document.getElementById('expressionsGrid');
        if (!grid) return;
        
        const categoryColors = {
            basic: 'border-blue-500',
            loops: 'border-green-500',
            effects: 'border-purple-500',
            advanced: 'border-red-500',
        };
        
        grid.innerHTML = expressionData.map(exp => `
            <div class="expression-card tool-card bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1" data-category="${exp.category}" data-search="${exp.title} ${exp.code} ${exp.desc} ${exp.category}">
                <div class="p-5">
                    <div class="flex justify-between items-start">
                        <h3 class="font-bold text-lg text-slate-800">${exp.title}</h3>
                        <span class="text-xs font-semibold uppercase px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">${exp.category}</span>
                    </div>
                    <p class="text-sm text-slate-500 mt-1 mb-3">${exp.desc}</p>
                    <pre class="expression-code bg-slate-800 text-slate-200 text-sm p-3 rounded-lg font-mono break-all cursor-pointer hover:bg-slate-700 transition-colors" onclick="copyExpression(this)"><code>${exp.code}</code></pre>
                </div>
                <div class="bg-slate-50 px-5 py-2 text-xs text-slate-500 border-t border-slate-200">
                    <strong>Apply to:</strong> ${exp.usage}
                </div>
            </div>
        `).join('');
    }

    // Initialize the page
    renderExpressions();
    
    // Setup filter functionality
    setupFilter('motionSearchInput', '#expressionsGrid', '.expression-card', 'motion-filter-buttons');
});
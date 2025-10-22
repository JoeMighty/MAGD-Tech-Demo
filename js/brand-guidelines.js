document.addEventListener('DOMContentLoaded', function() {
    let currentStep = 0;
    
    const steps = [
        'User Info',
        'Logos',
        'Colors',
        'Typography',
        'Tone of Voice',
        'Image Guidelines',
        'Review & Export'
    ];

    const formData = {
        userName: '',
        brandName: '',
        logos: {},
        colors: [],
        typography: {
            h1: { font: '', size: '48', weight: '700', color: '#000000' },
            h2: { font: '', size: '36', weight: '700', color: '#000000' },
            h3: { font: '', size: '24', weight: '600', color: '#000000' },
            paragraph: { font: '', size: '16', weight: '400', color: '#000000' }
        },
        toneOfVoice: '',
        imageExamples: []
    };

    const logoTypes = [
        { key: 'color', label: 'Color Logo' },
        { key: 'blackWhite', label: 'Black & White' },
        { key: 'rgb', label: 'RGB Version' },
        { key: 'cmyk', label: 'CMYK Version' },
        { key: 'retina', label: 'Retina/High-res' },
        { key: 'stacked', label: 'Stacked' },
        { key: 'horizontal', label: 'Horizontal' },
        { key: 'icon', label: 'Icon/Symbol' }
    ];

    const googleFonts = [
        'Roboto', 'Open Sans', 'Lato', 'Montserrat', 'Oswald',
        'Raleway', 'Poppins', 'Merriweather', 'Playfair Display', 'Inter',
        'Source Sans Pro', 'Nunito', 'Ubuntu', 'PT Sans', 'Rubik',
        'Work Sans', 'DM Sans', 'Manrope', 'Space Grotesk', 'Plus Jakarta Sans',
        'Outfit', 'Figtree', 'Karla', 'Quicksand', 'Mulish',
        'Barlow', 'Heebo', 'Cabin', 'Archivo', 'Hind',
        'Jost', 'Bitter', 'Crimson Text', 'Literata', 'EB Garamond',
        'Cormorant', 'Spectral', 'Cardo', 'Libre Baskerville', 'Lora'
    ];

    const fontWeights = [
        { value: '300', label: 'Light' },
        { value: '400', label: 'Regular' },
        { value: '500', label: 'Medium' },
        { value: '600', label: 'Semibold' },
        { value: '700', label: 'Bold' },
        { value: '800', label: 'Extra Bold' }
    ];

    // Initialize
    renderProgressBar();
    renderStep();
    updateNavigationButtons();

    // Event Listeners
    document.getElementById('backBtn').addEventListener('click', handleBack);
    document.getElementById('nextBtn').addEventListener('click', handleNext);

    function handleNext() {
        if (currentStep < steps.length - 1) {
            currentStep++;
            renderProgressBar();
            renderStep();
            updateNavigationButtons();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    function handleBack() {
        if (currentStep > 0) {
            currentStep--;
            renderProgressBar();
            renderStep();
            updateNavigationButtons();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    function updateNavigationButtons() {
        const backBtn = document.getElementById('backBtn');
        const nextBtn = document.getElementById('nextBtn');

        // Update back button
        if (currentStep === 0) {
            backBtn.disabled = true;
            backBtn.className = 'flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition bg-gray-200 text-gray-400 cursor-not-allowed';
        } else {
            backBtn.disabled = false;
            backBtn.className = 'flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition bg-gray-700 text-white hover:bg-gray-800 shadow-md hover:shadow-lg';
        }

        // Update next button
        if (currentStep === steps.length - 1) {
            nextBtn.style.display = 'none';
        } else {
            nextBtn.style.display = 'flex';
        }
    }

    function renderProgressBar() {
        const progressBar = document.getElementById('progressBar');
        const stepLabels = document.getElementById('stepLabels');

        progressBar.innerHTML = steps.map((step, index) => `
            <div class="flex items-center flex-1">
                <div class="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all ${
                    index <= currentStep
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                        : 'bg-gray-200 text-gray-500'
                }">
                    ${index < currentStep ? '<i class="fas fa-check"></i>' : index + 1}
                </div>
                ${index < steps.length - 1 ? `
                    <div class="flex-1 h-1 mx-2 rounded transition-all ${
                        index < currentStep ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 'bg-gray-200'
                    }"></div>
                ` : ''}
            </div>
        `).join('');

        stepLabels.innerHTML = steps.map((step, index) => `
            <span class="${index === currentStep ? 'font-semibold text-purple-600' : ''}">${step}</span>
        `).join('');
    }

    function renderStep() {
        const formContent = document.getElementById('formContent');

        switch(currentStep) {
            case 0:
                renderUserInfoStep(formContent);
                break;
            case 1:
                renderLogosStep(formContent);
                break;
            case 2:
                renderColorsStep(formContent);
                break;
            case 3:
                renderTypographyStep(formContent);
                break;
            case 4:
                renderToneOfVoiceStep(formContent);
                break;
            case 5:
                renderImageGuidelinesStep(formContent);
                break;
            case 6:
                renderReviewStep(formContent);
                break;
        }
    }

    function renderUserInfoStep(container) {
        container.innerHTML = `
            <div class="max-w-2xl mx-auto space-y-6">
                <div>
                    <h2 class="text-2xl font-bold text-gray-900 mb-2">Let's Get Started</h2>
                    <p class="text-gray-600 mb-6">First, tell us a bit about yourself and your brand.</p>
                </div>
                
                <div>
                    <label class="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
                    <input
                        type="text"
                        id="userName"
                        value="${formData.userName}"
                        class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                        placeholder="Enter your name"
                    />
                </div>

                <div>
                    <label class="block text-sm font-semibold text-gray-700 mb-2">Brand Name</label>
                    <input
                        type="text"
                        id="brandName"
                        value="${formData.brandName}"
                        class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                        placeholder="Enter your brand name"
                    />
                </div>
            </div>
        `;

        document.getElementById('userName').addEventListener('input', (e) => {
            formData.userName = e.target.value;
        });

        document.getElementById('brandName').addEventListener('input', (e) => {
            formData.brandName = e.target.value;
        });
    }

    function renderLogosStep(container) {
        container.innerHTML = `
            <div>
                <div class="mb-6">
                    <h2 class="text-2xl font-bold text-gray-900 mb-2">Logo Variations</h2>
                    <p class="text-gray-600">Upload different versions of your logo for various use cases.</p>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    ${logoTypes.map(type => `
                        <div class="border-2 border-dashed border-gray-300 rounded-xl p-6 hover:border-purple-400 transition">
                            <label class="cursor-pointer block">
                                <div class="text-center mb-4">
                                    <i class="fas fa-image text-gray-400 text-4xl mb-2"></i>
                                    <p class="font-semibold text-gray-700">${type.label}</p>
                                </div>
                                ${formData.logos[type.key] ? `
                                    <img src="${formData.logos[type.key]}" alt="${type.label}" class="w-full h-32 object-contain bg-gray-50 rounded-lg" />
                                ` : ''}
                                <input
                                    type="file"
                                    accept="image/*"
                                    class="hidden"
                                    data-logo-type="${type.key}"
                                />
                            </label>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        document.querySelectorAll('input[data-logo-type]').forEach(input => {
            input.addEventListener('change', (e) => {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = (event) => {
                        formData.logos[e.target.dataset.logoType] = event.target.result;
                        renderStep();
                    };
                    reader.readAsDataURL(file);
                }
            });
        });
    }

    function renderColorsStep(container) {
        container.innerHTML = `
            <div>
                <div class="mb-6">
                    <h2 class="text-2xl font-bold text-gray-900 mb-2">Brand Colors</h2>
                    <p class="text-gray-600">Define your brand's color palette.</p>
                </div>
                
                <div class="space-y-4 mb-6">
                    ${formData.colors.map((color, index) => `
                        <div class="flex items-center gap-4 bg-gray-50 p-4 rounded-xl">
                            <input
                                type="color"
                                value="${color.hex}"
                                data-color-index="${index}"
                                class="w-16 h-16 rounded-lg border-2 border-gray-300 cursor-pointer"
                            />
                            <input
                                type="text"
                                value="${color.name}"
                                placeholder="Color name"
                                data-color-name-index="${index}"
                                class="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            />
                            <input
                                type="text"
                                value="${color.hex}"
                                data-color-hex-index="${index}"
                                class="w-24 px-4 py-2 border border-gray-300 rounded-lg font-mono text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            />
                            <button
                                class="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                                data-remove-color="${index}"
                            >
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    `).join('')}
                </div>

                <button
                    id="addColorBtn"
                    class="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition shadow-md"
                >
                    <i class="fas fa-plus"></i>
                    Add Color
                </button>
            </div>
        `;

        document.getElementById('addColorBtn').addEventListener('click', () => {
            formData.colors.push({ hex: '#000000', name: '' });
            renderStep();
        });

        document.querySelectorAll('input[data-color-index]').forEach(input => {
            input.addEventListener('input', (e) => {
                const index = parseInt(e.target.dataset.colorIndex);
                formData.colors[index].hex = e.target.value;
                const hexInput = document.querySelector(`input[data-color-hex-index="${index}"]`);
                if (hexInput) hexInput.value = e.target.value;
            });
        });

        document.querySelectorAll('input[data-color-name-index]').forEach(input => {
            input.addEventListener('input', (e) => {
                const index = parseInt(e.target.dataset.colorNameIndex);
                formData.colors[index].name = e.target.value;
            });
        });

        document.querySelectorAll('input[data-color-hex-index]').forEach(input => {
            input.addEventListener('input', (e) => {
                const index = parseInt(e.target.dataset.colorHexIndex);
                if (/^#[0-9A-F]{6}$/i.test(e.target.value)) {
                    formData.colors[index].hex = e.target.value;
                    const colorInput = document.querySelector(`input[data-color-index="${index}"]`);
                    if (colorInput) colorInput.value = e.target.value;
                }
            });
        });

        document.querySelectorAll('button[data-remove-color]').forEach(button => {
            button.addEventListener('click', (e) => {
                const index = parseInt(e.target.closest('button').dataset.removeColor);
                formData.colors.splice(index, 1);
                renderStep();
            });
        });
    }

    function renderTypographyStep(container) {
        container.innerHTML = `
            <div>
                <div class="mb-6">
                    <h2 class="text-2xl font-bold text-gray-900 mb-2">Typography</h2>
                    <p class="text-gray-600">Define font styles for different text elements.</p>
                </div>
                
                <div class="space-y-6">
                    ${Object.entries({
                        h1: 'Heading 1',
                        h2: 'Heading 2',
                        h3: 'Heading 3',
                        paragraph: 'Paragraph'
                    }).map(([styleKey, label]) => {
                        const style = formData.typography[styleKey];
                        return `
                            <div class="bg-gray-50 p-6 rounded-xl">
                                <h3 class="font-semibold text-lg mb-4">${label}</h3>
                                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-2">Font Family</label>
                                        <select
                                            data-typography="${styleKey}"
                                            data-property="font"
                                            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                                        >
                                            <option value="">Select font</option>
                                            ${googleFonts.map(font => `
                                                <option value="${font}" ${style.font === font ? 'selected' : ''}>${font}</option>
                                            `).join('')}
                                        </select>
                                    </div>
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-2">Size (px)</label>
                                        <input
                                            type="number"
                                            value="${style.size}"
                                            data-typography="${styleKey}"
                                            data-property="size"
                                            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                                        />
                                    </div>
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-2">Weight</label>
                                        <select
                                            data-typography="${styleKey}"
                                            data-property="weight"
                                            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                                        >
                                            ${fontWeights.map(weight => `
                                                <option value="${weight.value}" ${style.weight === weight.value ? 'selected' : ''}>${weight.label}</option>
                                            `).join('')}
                                        </select>
                                    </div>
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-2">Color</label>
                                        <input
                                            type="color"
                                            value="${style.color}"
                                            data-typography="${styleKey}"
                                            data-property="color"
                                            class="w-full h-10 rounded-lg border border-gray-300 cursor-pointer"
                                        />
                                    </div>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;

        document.querySelectorAll('[data-typography]').forEach(input => {
            input.addEventListener('input', (e) => {
                const styleKey = e.target.dataset.typography;
                const property = e.target.dataset.property;
                formData.typography[styleKey][property] = e.target.value;
            });
        });
    }

    function renderToneOfVoiceStep(container) {
        container.innerHTML = `
            <div class="max-w-2xl mx-auto">
                <div class="mb-6">
                    <h2 class="text-2xl font-bold text-gray-900 mb-2">Tone of Voice</h2>
                    <p class="text-gray-600">Describe how your brand communicates with its audience.</p>
                </div>
                
                <textarea
                    id="toneOfVoice"
                    rows="12"
                    class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                    placeholder="Describe your brand's tone of voice. For example:

• Friendly and approachable
• Professional yet conversational
• Empathetic and supportive
• Avoid jargon and complex terminology"
                >${formData.toneOfVoice}</textarea>
            </div>
        `;

        document.getElementById('toneOfVoice').addEventListener('input', (e) => {
            formData.toneOfVoice = e.target.value;
        });
    }

    function renderImageGuidelinesStep(container) {
        container.innerHTML = `
            <div>
                <div class="mb-6">
                    <h2 class="text-2xl font-bold text-gray-900 mb-2">Image Use Examples</h2>
                    <p class="text-gray-600">Upload examples that represent your brand's visual style.</p>
                </div>
                
                <div class="grid grid-cols-3 gap-4 mb-6">
                    ${formData.imageExamples.map((img, index) => `
                        <div class="relative group">
                            <img src="${img}" alt="Example ${index + 1}" class="w-full h-48 object-cover rounded-xl" />
                            <button
                                class="absolute top-2 right-2 p-2 bg-red-600 text-white rounded-full opacity-0 group-hover:opacity-100 transition shadow-lg"
                                data-remove-image="${index}"
                            >
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                    `).join('')}
                    
                    <label class="border-2 border-dashed border-gray-300 rounded-xl h-48 flex items-center justify-center cursor-pointer hover:border-purple-400 transition">
                        <div class="text-center">
                            <i class="fas fa-cloud-upload-alt text-gray-400 text-4xl mb-2"></i>
                            <span class="text-sm text-gray-600">Upload Image</span>
                        </div>
                        <input
                            type="file"
                            accept="image/*"
                            class="hidden"
                            id="imageUpload"
                        />
                    </label>
                </div>
            </div>
        `;

        document.getElementById('imageUpload').addEventListener('change', handleImageUpload);
        
        document.querySelectorAll('button[data-remove-image]').forEach(button => {
            button.addEventListener('click', (e) => {
                const index = parseInt(e.target.closest('button').dataset.removeImage);
                formData.imageExamples.splice(index, 1);
                renderStep();
            });
        });
    }

    function handleImageUpload(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                formData.imageExamples.push(e.target.result);
                renderStep();
            };
            reader.readAsDataURL(file);
        }
    }

    function renderReviewStep(container) {
        container.innerHTML = `
            <div id="pdfPreviewContent">
                <div class="mb-6">
                    <h2 class="text-2xl font-bold text-gray-900 mb-2">Review & Export</h2>
                    <p class="text-gray-600">Review your brand guidelines and download the PDF.</p>
                </div>
                
                <div class="space-y-4 mb-8">
                    <div class="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100">
                        <h3 class="font-bold text-lg mb-3 text-gray-900">Brand Information</h3>
                        <div class="space-y-1">
                            <p class="text-gray-700"><span class="font-semibold">Brand Name:</span> ${formData.brandName || 'Not set'}</p>
                            <p class="text-gray-700"><span class="font-semibold">Created by:</span> ${formData.userName || 'Not set'}</p>
                        </div>
                    </div>

                    <div class="bg-gray-50 p-6 rounded-xl">
                        <h3 class="font-bold text-lg mb-3 text-gray-900">Logos</h3>
                        <p class="text-gray-700">${Object.keys(formData.logos).length} logo versions uploaded</p>
                        ${Object.keys(formData.logos).length > 0 ? `
                            <div class="grid grid-cols-4 gap-3 mt-4">
                                ${Object.entries(formData.logos).map(([key, img]) => `
                                    <div class="bg-white p-3 rounded-lg">
                                        <img src="${img}" alt="${key}" class="w-full h-20 object-contain" />
                                    </div>
                                `).join('')}
                            </div>
                        ` : ''}
                    </div>

                    <div class="bg-gray-50 p-6 rounded-xl">
                        <h3 class="font-bold text-lg mb-3 text-gray-900">Brand Colors</h3>
                        ${formData.colors.length > 0 ? `
                            <div class="flex flex-wrap gap-3 mt-3">
                                ${formData.colors.map((color, i) => `
                                    <div class="flex flex-col items-center">
                                        <div
                                            class="w-20 h-20 rounded-xl border-2 border-gray-200 shadow-sm"
                                            style="background-color: ${color.hex}"
                                        ></div>
                                        <span class="text-xs mt-2 font-medium text-gray-700">${color.name || color.hex}</span>
                                    </div>
                                `).join('')}
                            </div>
                        ` : '<p class="text-gray-500">No colors added</p>'}
                    </div>

                    <div class="bg-gray-50 p-6 rounded-xl">
                        <h3 class="font-bold text-lg mb-3 text-gray-900">Typography</h3>
                        <div class="space-y-4">
                            ${Object.entries({
                                h1: 'Heading 1',
                                h2: 'Heading 2',
                                h3: 'Heading 3',
                                paragraph: 'Paragraph'
                            }).map(([styleKey, label]) => {
                                const style = formData.typography[styleKey];
                                return `
                                    <div class="bg-white p-4 rounded-lg">
                                        <p class="text-sm font-semibold text-gray-600 mb-1">${label}</p>
                                        <p class="text-gray-700">
                                            ${style.font || 'Not set'} • ${style.size}px • Weight: ${style.weight}
                                        </p>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    </div>

                    <div class="bg-gray-50 p-6 rounded-xl">
                        <h3 class="font-bold text-lg mb-3 text-gray-900">Tone of Voice</h3>
                        <p class="text-gray-700 whitespace-pre-wrap">${formData.toneOfVoice || 'Not set'}</p>
                    </div>

                    <div class="bg-gray-50 p-6 rounded-xl">
                        <h3 class="font-bold text-lg mb-3 text-gray-900">Image Examples</h3>
                        ${formData.imageExamples.length > 0 ? `
                            <div class="grid grid-cols-4 gap-3 mt-3">
                                ${formData.imageExamples.map((img, i) => `
                                    <img src="${img}" alt="Example ${i + 1}" class="w-full h-24 object-cover rounded-lg" />
                                `).join('')}
                            </div>
                        ` : '<p class="text-gray-500">No images uploaded</p>'}
                    </div>
                </div>

                <div class="border-t pt-6">
                    <button
                        id="downloadPdfBtn"
                        class="flex items-center gap-3 px-8 py-4 rounded-xl text-white text-lg font-semibold transition shadow-lg hover:shadow-xl"
                        style="background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #d946ef 100%)"
                    >
                        <i class="fas fa-download"></i>
                        Download PDF Guidelines
                    </button>
                </div>
            </div>
        `;

        document.getElementById('downloadPdfBtn').addEventListener('click', generatePDF);
    }

    async function generatePDF() {
        const btn = document.getElementById('downloadPdfBtn');
        const originalHTML = btn.innerHTML;
        
        // Show loading state
        btn.disabled = true;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Generating PDF...';
        
        try {
            // Check if jsPDF is loaded
            if (typeof window.jspdf === 'undefined') {
                throw new Error('PDF library not loaded. Please refresh the page and try again.');
            }
            
            const { jsPDF } = window.jspdf;
            
            // Get the content to export
            const content = document.getElementById('pdfPreviewContent');
            
            // Convert HTML to canvas
            const canvas = await html2canvas(content, {
                scale: 2,
                useCORS: true,
                logging: false,
                backgroundColor: '#ffffff'
            });
            
            // Create PDF
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF({
                orientation: 'portrait',
                unit: 'mm',
                format: 'a4'
            });
            
            const imgWidth = 210; // A4 width in mm
            const pageHeight = 297; // A4 height in mm
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            let heightLeft = imgHeight;
            let position = 0;
            
            // Add first page
            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
            
            // Add additional pages if needed
            while (heightLeft > 0) {
                position = heightLeft - imgHeight;
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }
            
            // Save the PDF
            const filename = `${formData.brandName.replace(/\s+/g, '_') || 'Brand'}_Guidelines.pdf`;
            pdf.save(filename);
            
            showNotification('PDF downloaded successfully!', 'success');
            
        } catch (error) {
            console.error('Error generating PDF:', error);
            showNotification('Error generating PDF: ' + error.message, 'error');
        } finally {
            // Restore button
            btn.disabled = false;
            btn.innerHTML = originalHTML;
        }
    }

    function showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        notification.className = `fixed top-4 right-4 z-50 px-6 py-4 rounded-lg shadow-xl text-white transform transition-all duration-300 ${
            type === 'success' ? 'bg-green-500' : 'bg-red-500'
        }`;
        notification.innerHTML = `
            <div class="flex items-center gap-3">
                <i class="fas fa-${type === 'success' ? 'check' : 'exclamation'}-circle"></i>
                <span>${message}</span>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => notification.style.transform = 'translateX(0)', 10);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.opacity = '0';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
});

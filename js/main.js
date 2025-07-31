document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile menu functionality
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuButton = document.getElementById('mobile-menu-button');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Copy expression functionality (for motion page)
    window.copyExpression = function(element) {
        const text = element.textContent.trim();
        navigator.clipboard.writeText(text).then(() => {
            showCopyToast();
        }).catch(err => console.error('Failed to copy: ', err));
    }

    // Show copy toast notification
    function showCopyToast() {
        const toast = document.getElementById('copyToast');
        if (toast) {
            toast.classList.remove('translate-y-20', 'opacity-0');
            setTimeout(() => {
                toast.classList.add('translate-y-20', 'opacity-0');
            }, 2000);
        }
    }

    // Generic filter function for search and category filtering
    window.setupFilter = function(inputId, containerSelector, itemSelector, filterButtonsId) {
        const searchInput = document.getElementById(inputId);
        const filterButtons = document.querySelectorAll(`#${filterButtonsId} .filter-btn`);

        function performFilter() {
            const activeFilterBtn = document.querySelector(`#${filterButtonsId} .filter-btn.bg-purple-100, #${filterButtonsId} .filter-btn.bg-indigo-100, #${filterButtonsId} .filter-btn.bg-orange-100`);
            if(!activeFilterBtn) return;
            
            const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
            const activeFilter = activeFilterBtn.dataset.filter;
            const items = document.querySelectorAll(itemSelector);

            items.forEach(item => {
                const tags = (item.dataset.tags || item.dataset.category || '').toLowerCase();
                const searchData = (item.dataset.search || item.textContent).toLowerCase();
                
                const matchesFilter = activeFilter === 'all' || 
                                    tags.includes(activeFilter) || 
                                    item.dataset.category === activeFilter ||
                                    searchData.includes(activeFilter.replace('-', ' '));
                const matchesSearch = searchTerm === '' || searchData.includes(searchTerm);

                item.style.display = (matchesFilter && matchesSearch) ? '' : 'none';
            });
        }

        if (searchInput) {
            searchInput.addEventListener('input', performFilter);
        }
        
        filterButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                const isEmergingPage = filterButtonsId === 'emerging-filter-buttons';
                const isInteractivePage = filterButtonsId === 'interactive-filter-buttons';
                let activeClass = 'bg-indigo-100 text-indigo-700';
                
                if (isEmergingPage) {
                    activeClass = 'bg-purple-100 text-purple-700';
                } else if (isInteractivePage) {
                    activeClass = 'bg-orange-100 text-orange-700';
                }
                
                const inactiveClass = 'bg-slate-100 text-slate-700';
                
                filterButtons.forEach(b => {
                    b.className = `filter-btn ${inactiveClass} px-4 py-1.5 rounded-full text-sm font-semibold`;
                });
                this.className = `filter-btn ${activeClass} px-4 py-1.5 rounded-full text-sm font-semibold`;
                performFilter();
            });
        });
    }

    // Table sorting functionality (for fonts page)
    let sortDir = {};
    window.sortTable = function(n) {
        const table = document.getElementById('fontTable');
        if (!table) return;
        const tbody = table.tBodies[0];
        const rows = Array.from(tbody.rows);
        const dir = sortDir[n] === 'asc' ? 'desc' : 'asc';
        sortDir[n] = dir;

        rows.sort((a, b) => {
            let x = a.getElementsByTagName('TD')[n].textContent.toLowerCase();
            let y = b.getElementsByTagName('TD')[n].textContent.toLowerCase();
            // Handle numeric/price sorting
            if (n === 2) {
                x = x === 'free' || x === 'freemium' ? 0 : parseFloat(x.replace('€', ''));
                y = y === 'free' || y === 'freemium' ? 0 : parseFloat(y.replace('€', ''));
            }
            if (x < y) return dir === 'asc' ? -1 : 1;
            if (x > y) return dir === 'asc' ? 1 : -1;
            return 0;
        });
        
        rows.forEach(row => tbody.appendChild(row));

        // Update sort icons
        table.querySelectorAll('thead th i').forEach((icon, index) => {
            icon.className = 'fas fa-sort text-slate-400 ml-1';
            if (index === n) {
                icon.className = `fas fa-sort-${dir === 'asc' ? 'up' : 'down'} text-indigo-500 ml-1`;
            }
        });
    }

    // Set active navigation link based on current page
    function setActiveNavLink() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === currentPage || (currentPage === '' && href === 'index.html')) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // Initialize active nav link
    setActiveNavLink();

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

const { createApp, ref, computed, nextTick, watch } = Vue;

const CAP = 900;

const FISH_DATABASE = [
    { name: "Tutu Balletfish", description: "Named for its soft, airy tail that looks just like a ballet tutu. Loves dancing in the sunlight in the midstream.", rod: "Light", seasons: ["Summer", "Autumn"], times: ["Morning", "Afternoon"], spots: ["Midstream"], weather: ["Sunny"], emoji: "🐠", rarity: "Uncommon", value: 5 },
    { name: "Dreamscale Fish", description: "A fish that dreams of becoming neon lights. To gain more dazzling scales, it gave up its sight to a sea witch.", rod: "Light", seasons: ["Summer", "Autumn"], times: ["Morning", "Afternoon"], spots: ["Riverside"], weather: ["Sunny"], emoji: "🐟", rarity: "Rare", value: 12 },
    { name: "Pleaser Fish", description: "A creature that constantly changes its look to satisfy client demands. Only appears in the midstream.", rod: "Light", seasons: ["Summer", "Autumn"], times: ["Morning", "Afternoon"], spots: ["Midstream"], weather: ["Sunny"], emoji: "🐡", rarity: "Common", value: 2 },
    { name: "Blue Tears", description: "A fish with a body as radiant as aquamarine. Glistens like a translucent necklace. Active in winter ice holes.", rod: "Light", seasons: ["Winter"], times: ["Morning", "Afternoon"], spots: ["Ice Hole"], weather: ["Light Snow", "Heavy Snow"], emoji: "💎", rarity: "Epic", value: 25 },
    { name: "Pompadour Fish", description: "A reckless little fish that charges ahead without thinking. Its unique shape allows a quick escape.", rod: "Light", seasons: ["Winter"], times: ["Dawn", "Night"], spots: ["Ice Hole"], weather: ["Sunny", "Foggy"], emoji: "🐠", rarity: "Common", value: 2 },
    { name: "Loachie", description: "An avoidant-type fish that immediately burrows in the mud the moment it gets any attention.", rod: "Light", seasons: ["Summer", "Autumn"], times: ["After Midnight", "Night"], spots: ["Ice Hole"], weather: ["Sunny", "Foggy"], emoji: "🐍", rarity: "Common", value: 2 },
    { name: "Rocklike Fish", description: "A fish skilled at mimicking underwater rocks. Some rare individuals shimmer with a bizarre mineral glow.", rod: "Light", seasons: ["Spring", "Summer"], times: ["Morning", "Afternoon"], spots: ["Midstream"], weather: ["Sunny", "Foggy", "Light Snow"], emoji: "🪨", rarity: "Common", value: 2 },
    { name: "Ghostblade Fish", description: "Vowed to avenge an ancestor cut by a blade; has a body shaped eerily like a small dagger.", rod: "Heavy", seasons: ["Summer", "Autumn"], times: ["After Midnight", "Night"], spots: ["Wreckage"], weather: ["Foggy", "Light Snow"], emoji: "🗡️", rarity: "Rare", value: 12 },
    { name: "Bold Redline Fish", description: "A fish with a red line running down its side, thought to be a mark of fate. Appears in winter ice holes.", rod: "Light", seasons: ["Winter"], times: ["Dawn", "Dusk"], spots: ["Ice Hole"], weather: ["Foggy", "Light Snow"], emoji: "🔴", rarity: "Uncommon", value: 5 },
    { name: "Pharaoh Fish", description: "A great family that journeyed all the way from the distant Nile, carrying traces of ancient civilizations.", rod: "Heavy", seasons: ["Winter"], times: ["Afternoon", "Dusk"], spots: ["Ice Hole"], weather: ["Foggy", "Light Snow"], emoji: "👑", rarity: "Legendary", value: 50 },
    { name: "Rad Bass", description: "Escaped through the sewers of a secret nuclear testing facility, warping its appearance with radiation.", rod: "Heavy", seasons: ["Spring", "Autumn"], times: ["Afternoon", "Dusk"], spots: ["Dock"], weather: ["Sunny", "Foggy", "Light Snow"], emoji: "🟢", rarity: "Rare", value: 12 },
    { name: "Underbite Fish", description: "Self-conscious about its looks, it travels the world learning fashion trends. Active near docks.", rod: "Heavy", seasons: ["Spring", "Autumn"], times: ["Afternoon", "Dusk"], spots: ["Dock"], weather: ["Sunny", "Foggy"], emoji: "🐟", rarity: "Common", value: 2 },
    { name: "Quack Fish", description: "A fish that dreams of being a duck and loves to mimic quacking near the boulder at night.", rod: "Heavy", seasons: ["Spring", "Summer"], times: ["After Midnight", "Night"], spots: ["Boulder"], weather: ["Sunny", "Foggy"], emoji: "🦆", rarity: "Rare", value: 12 },
    { name: "Ghostooth Fish", description: "Emits a mechanical green glow after an ancestor was struck by an unknown device. Active in winter.", rod: "Heavy", seasons: ["Winter"], times: ["After Midnight", "Night"], spots: ["Ice Hole"], weather: ["Sunny", "Foggy"], emoji: "🦷", rarity: "Epic", value: 25 },
    { name: "Reagent Fish", description: "A chemistry-obsessed fish. Consumes rare chemical substances and forms a bottle crystal in its body.", rod: "Heavy", seasons: ["Winter"], times: ["Afternoon", "Dusk"], spots: ["Ice Hole"], weather: ["Sunny", "Light Snow"], emoji: "🧪", rarity: "Epic", value: 25 },
    { name: "Ghostiger Fish", description: "Offspring with tiger stripes after an ancestor was bitten by a tiger. Active during winter and autumn.", rod: "Heavy", seasons: ["Autumn", "Winter"], times: ["Dawn", "Dusk"], spots: ["River Bend"], weather: ["Light Snow", "Heavy Snow"], emoji: "🐯", rarity: "Legendary", value: 50 },
    { name: "Peony Fish", description: "Resembles a blooming peony, folding up like a bud when resting. Swims near the riverside.", rod: "Light", seasons: ["Summer", "Autumn"], times: ["Morning", "Dusk"], spots: ["Riverside"], weather: ["Sunny"], emoji: "🌸", rarity: "Rare", value: 12 },
    { name: "Normie Fish", description: "A fish with absolutely no distinguishing traits. Even the rare ones look plain.", rod: "Light", seasons: ["Summer", "Autumn"], times: ["Afternoon", "Dusk"], spots: ["Riverside"], weather: ["Sunny", "Foggy"], emoji: "🐟", rarity: "Common", value: 2 },
    { name: "Hero Fish", description: "Carries a sword-like tail and protects other little fish and shrimp.", rod: "Light", seasons: ["Summer", "Autumn"], times: ["Morning", "Afternoon"], spots: ["Riverside"], weather: ["Sunny"], emoji: "🛡️", rarity: "Uncommon", value: 5 },
    { name: "Fireworks Fish", description: "Captivating fish that lights up the water like a miniature fireworks display.", rod: "Light", seasons: ["Summer", "Autumn"], times: ["Afternoon", "Dusk"], spots: ["Riverside"], weather: ["Sunny", "Foggy"], emoji: "🎆", rarity: "Epic", value: 25 },
    { name: "Louis Fish", description: "Vain species covered in patterns of luxury, known to bray like a donkey in winter ice holes.", rod: "Light", seasons: ["Winter"], times: ["Dawn", "Afternoon"], spots: ["Ice Hole"], weather: ["Sunny", "Heavy Snow"], emoji: "⚜️", rarity: "Epic", value: 25 },
    { name: "Mud Monkey", description: "A small fish that loves hopping on muddy flats, mimicking street dance crews.", rod: "Light", seasons: ["Winter"], times: ["Morning", "Afternoon"], spots: ["Ice Hole"], weather: ["Sunny", "Light Snow"], emoji: "🐵", rarity: "Uncommon", value: 5 },
    { name: "Lightspot Fish", description: "Loves mimicking ripples on the water. Solar eclipse and aurora variants glow beautifully.", rod: "Light", seasons: ["Summer", "Autumn"], times: ["Morning", "Dusk"], spots: ["Midstream"], weather: ["Sunny", "Foggy"], emoji: "💡", rarity: "Common", value: 2 },
    { name: "Whisker Fish", description: "Sticks out its big mouth grumpily, waiting for compliments on its whiskers. Active at wreckage.", rod: "Heavy", seasons: ["Summer", "Autumn"], times: ["After Midnight", "Dawn"], spots: ["Wreckage"], weather: ["Sunny", "Foggy"], emoji: "🧔", rarity: "Uncommon", value: 5 },
    { name: "Seahog", description: "A deep-sea fish as fat as a pig. Disguises with a flushed face to avoid exercise.", rod: "Heavy", seasons: ["Summer", "Autumn"], times: ["Dusk", "Night"], spots: ["River Bend"], weather: ["Foggy", "Light Snow"], emoji: "🐷", rarity: "Uncommon", value: 5 },
    { name: "Pouty Fish", description: "Too lazy to move, it simply pouts to reach its food, forming its mouth shape over generations.", rod: "Heavy", seasons: ["Winter"], times: ["Morning", "Dusk"], spots: ["Ice Hole"], weather: ["Sunny", "Light Snow"], emoji: "😗", rarity: "Common", value: 2 },
    { name: "Janitor Fish", description: "Has high cleanliness standards, rubbing on riverbed rocks. Develops golden scales near Fortune Carp.", rod: "Light", seasons: ["Summer", "Autumn"], times: ["After Midnight", "Night"], spots: ["River Bend"], weather: ["Sunny", "Foggy"], emoji: "🧹", rarity: "Common", value: 2 },
    { name: "Liar Fish", description: "Deceitful fish whose body grows redder with every lie told. Roams near docks at night.", rod: "Heavy", seasons: ["Summer", "Autumn"], times: ["Dawn", "Night"], spots: ["Dock"], weather: ["Foggy", "Light Snow", "Heavy Snow"], emoji: "🤥", rarity: "Rare", value: 12 },
    { name: "Dopey Catfish", description: "Beneath its dopey looks, it has grasped the deep secrets of the universe.", rod: "Heavy", seasons: ["Summer", "Autumn"], times: ["After Midnight", "Night"], spots: ["River Bend"], weather: ["Foggy", "Light Snow"], emoji: "🥴", rarity: "Uncommon", value: 5 },
    { name: "Seven Stars", description: "Propels with anal fin waves, hunting quietly in shadows and striking in winter ice holes.", rod: "Heavy", seasons: ["Winter"], times: ["After Midnight", "Night"], spots: ["Ice Hole"], weather: ["Sunny", "Foggy"], emoji: "✨", rarity: "Epic", value: 25 },
    { name: "Doghead Fish", description: "Has a dog-like head and attempts to bark. Active near the boulder during dusk/dawn.", rod: "Heavy", seasons: ["Spring", "Winter"], times: ["Dawn", "Dusk"], spots: ["Boulder"], weather: ["Foggy", "Light Snow", "Heavy Snow"], emoji: "🐶", rarity: "Rare", value: 12 },
    { name: "Trainer Fish", description: "Asks about workouts and client schedules, swimming near River Bends.", rod: "Heavy", seasons: ["Spring", "Autumn"], times: ["Dusk", "Night"], spots: ["River Bend"], weather: ["Sunny", "Foggy"], emoji: "🏋️", rarity: "Rare", value: 12 },
    { name: "Copyfish", description: "Imprints textures of visited places. Rare chessboard or gold coin variants play chess.", rod: "Heavy", seasons: ["Spring", "Winter"], times: ["After Midnight", "Dawn"], spots: ["Dock"], weather: ["Sunny", "Foggy"], emoji: "⚄", rarity: "Rare", value: 12 },
    { name: "Chopstick Gar", description: "Pointy snout is useful for carrying stones to build its home. Appears in winter ice holes.", rod: "Heavy", seasons: ["Winter"], times: ["Dusk", "Night"], spots: ["Ice Hole"], weather: ["Sunny", "Heavy Snow"], emoji: "🥢", rarity: "Uncommon", value: 5 },
    { name: "Coco Fish", description: "Shares an ancestor with the beloved Coco from five centuries ago.", rod: "Heavy", seasons: ["Autumn", "Winter"], times: ["After Midnight", "Night"], spots: ["Riverside"], weather: ["Light Snow", "Heavy Snow"], emoji: "🥥", rarity: "Common", value: 2 },
    { name: "Lava Fish", description: "Born when molten lava meets glaciers. Holds tiny dormant volcanoes within its body.", rod: "Heavy", seasons: ["Spring", "Summer"], times: ["Morning", "Dusk"], spots: ["Midstream"], weather: ["Sunny"], emoji: "🌋", rarity: "Legendary", value: 50 },
    { name: "Glacial Sturgeon", description: "Born when bone-chilling glaciers meet molten lava, made entirely of blue ice.", rod: "Heavy", seasons: ["Spring", "Autumn"], times: ["After Midnight", "Night"], spots: ["Wreckage"], weather: ["Foggy", "Light Snow", "Heavy Snow"], emoji: "❄️", rarity: "Legendary", value: 50 },
    { name: "Fortune Carp", description: "A carp said to bring wealth and good fortune, often spotted in river bends during the day.", rod: "Heavy", seasons: ["Spring", "Summer"], times: ["Morning", "Afternoon"], spots: ["River Bend"], weather: ["Sunny", "Foggy"], emoji: "🪙", rarity: "Epic", value: 25 },
    { name: "Jello Fish", description: "Hates being mistaken for jellyfish. Moves quietly like slime to evade predators.", rod: "Heavy", seasons: ["Autumn", "Winter"], times: ["Dawn", "Night"], spots: ["Boulder"], weather: ["Light Snow", "Heavy Snow"], emoji: "🍮", rarity: "Uncommon", value: 5 },
    { name: "Fan Shrimp", description: "Tiny shrimp that loves boxing matches and strolls around the docks in daylight.", rod: "Light", seasons: ["Summer", "Autumn"], times: ["Morning", "Afternoon"], spots: ["Dock"], weather: ["Sunny", "Foggy"], emoji: "🦐", rarity: "Common", value: 2 },
    { name: "Tarantula Crab", description: "A sideways-walking crab with spider genes, frequently found sunbathing.", rod: "Light", seasons: ["Summer", "Autumn"], times: ["Afternoon", "Dusk"], spots: ["Riverside"], weather: ["Foggy", "Light Snow", "Heavy Snow"], emoji: "🕷️", rarity: "Rare", value: 12 },
    { name: "Baby Tadpole", description: "Tiny tadpole playing near the riverside, which matures into a golden-sheened frog.", rod: "Light", seasons: ["Spring", "Summer"], times: ["Afternoon", "Dusk"], spots: ["Riverside"], weather: ["Sunny"], emoji: "🐸", rarity: "Common", value: 2 },
    { name: "Boxer Shrimp", description: "Highly aggressive shrimp that holds boxing matches near the riverside at night.", rod: "Light", seasons: ["Spring", "Summer"], times: ["After Midnight", "Night"], spots: ["Riverside"], weather: ["Sunny", "Foggy"], emoji: "🥊", rarity: "Uncommon", value: 5 },
    { name: "Master Turtle", description: "Enlightened practitioner with scars of training, sparring with companions.", rod: "Light", seasons: ["Spring", "Summer"], times: ["Morning", "Afternoon"], spots: ["Riverside"], weather: ["Sunny", "Light Snow"], emoji: "🐢", rarity: "Rare", value: 12 },
    { name: "Glowing Pearl", description: "Lustrous pearl born from a shell, absorbing sun rays to glow faintly at night.", rod: "Light", seasons: ["Autumn", "Winter"], times: ["Morning", "Afternoon"], spots: ["Boulder"], weather: ["Sunny", "Foggy"], emoji: "🦪", rarity: "Epic", value: 25 },
    { name: "Money Pouch", description: "A pouch filled with ancient bone-shaped coins from times long passed.", rod: "Light", seasons: ["Summer", "Autumn"], times: ["After Midnight", "Dawn"], spots: ["Wreckage"], weather: ["Sunny", "Foggy"], emoji: "💰", rarity: "Epic", value: 25 },
    { name: "Cry Fish", description: "A very weepy fish, crying near boulders after midnight because it is not a real fish.", rod: "Heavy", seasons: ["Summer", "Autumn"], times: ["After Midnight", "Dawn"], spots: ["Boulder"], weather: ["Sunny", "Foggy"], emoji: "😢", rarity: "Uncommon", value: 5 },
    { name: "Weird Stuff", description: "One dog's trash is another dog's treasure. Found near boulders.", rod: "Heavy", seasons: ["Autumn", "Winter"], times: ["After Midnight", "Dawn"], spots: ["Boulder"], weather: ["Sunny", "Foggy"], emoji: "🌀", rarity: "Common", value: 2 }
];

createApp({
    setup() {
        // --- Navigation ---
        const currentTab = ref('dashboard');

        // --- Core Calculator & Dashboard ---
        const total = ref(0);
        const lastGain = ref(null);
        const history = ref([]);
        const tBefore = ref('');
        const tAfter = ref('');
        const autoFilled = ref(false);

        // --- Fishing Journal Checklist ---
        const caughtFish = ref({});

        // --- Filter states ---
        const searchInput = ref('');
        const selectedRarity = ref('');
        const selectedSeason = ref('');
        const selectedWeather = ref('');
        const selectedLocation = ref('');

        // --- Gear Assistant Helper ---
        const currentGearSeason = ref('Summer');
        const currentGearWeather = ref('Sunny');
        const currentGearLocation = ref('Riverside');
        const currentGearTime = ref('Afternoon');

        // --- Toast Alerts ---
        const toastVisible = ref(false);
        const toastMsg = ref('');
        const toastIcon = ref('');
        let toastTimer = null;

        // --- Confetti Canvas System ---
        let confettiActive = false;
        let confettiAnimationId = null;
        const particles = [];
        const colors = ['#00FFB2', '#00D4A0', '#FFAE42', '#3B82F6', '#A855F7', '#FF5368'];

        function initConfetti() {
            const canvas = document.getElementById('confetti-canvas');
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            // Resize handler
            window.addEventListener('resize', () => {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            });

            class Particle {
                constructor() {
                    this.x = Math.random() * canvas.width;
                    this.y = Math.random() * -canvas.height - 20;
                    this.size = Math.random() * 8 + 6;
                    this.color = colors[Math.floor(Math.random() * colors.length)];
                    this.speed = Math.random() * 3 + 4;
                    this.angle = Math.random() * 360;
                    this.spinSpeed = Math.random() * 4 - 2;
                    this.wind = Math.random() * 1.5 - 0.75;
                }
                update() {
                    this.y += this.speed;
                    this.x += this.wind;
                    this.angle += this.spinSpeed;
                }
                draw() {
                    ctx.save();
                    ctx.translate(this.x, this.y);
                    ctx.rotate((this.angle * Math.PI) / 180);
                    ctx.fillStyle = this.color;
                    ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
                    ctx.restore();
                }
            }

            // Populate particles
            for (let i = 0; i < 150; i++) {
                particles.push(new Particle());
            }

            function animate() {
                if (!confettiActive) {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    return;
                }
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                let activeCount = 0;
                particles.forEach(p => {
                    p.update();
                    p.draw();
                    if (p.y < canvas.height) activeCount++;
                    else {
                        // Reset particle at top
                        p.y = Math.random() * -100 - 10;
                        p.x = Math.random() * canvas.width;
                    }
                });
                confettiAnimationId = requestAnimationFrame(animate);
            }

            confettiActive = true;
            animate();

            // Auto stop confetti after 5 seconds to conserve resources
            setTimeout(() => {
                confettiActive = false;
                cancelAnimationFrame(confettiAnimationId);
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            }, 6000);
        }

        // --- Init LocalStorage ---
        function loadSavedData() {
            try {
                const savedTotal = localStorage.getItem('pa_fishing_total');
                if (savedTotal !== null) total.value = Math.min(Number(savedTotal), CAP);

                const savedLastGain = localStorage.getItem('pa_fishing_last_gain');
                if (savedLastGain !== null) lastGain.value = Number(savedLastGain);

                const savedHistory = localStorage.getItem('pa_fishing_history');
                if (savedHistory !== null) history.value = JSON.parse(savedHistory);

                const savedCaught = localStorage.getItem('pa_fishing_caught');
                if (savedCaught !== null) caughtFish.value = JSON.parse(savedCaught);
            } catch (e) {
                console.error("Error reading from localStorage", e);
            }
        }

        function saveAll() {
            localStorage.setItem('pa_fishing_total', total.value);
            localStorage.setItem('pa_fishing_last_gain', lastGain.value !== null ? lastGain.value : '');
            localStorage.setItem('pa_fishing_history', JSON.stringify(history.value));
            localStorage.setItem('pa_fishing_caught', JSON.stringify(caughtFish.value));
        }

        // --- Computed Values ---
        const pct = computed(() => Math.min(Math.round((total.value / CAP) * 100), 100));
        const remaining = computed(() => Math.max(0, CAP - total.value));
        const isCapped = computed(() => total.value >= CAP);

        const deltaRaw = computed(() => {
            if (tBefore.value === '' || tAfter.value === '') return null;
            return Number(tAfter.value) - Number(tBefore.value);
        });

        const cappedGain = computed(() => {
            if (deltaRaw.value === null || deltaRaw.value <= 0) return null;
            return Math.min(deltaRaw.value, remaining.value);
        });

        const deltaDisplay = computed(() => {
            if (deltaRaw.value === null) return '—';
            return (deltaRaw.value > 0 ? '+' : '') + deltaRaw.value;
        });

        const deltaClass = computed(() => {
            if (deltaRaw.value === null) return '';
            if (deltaRaw.value > 0) return 'pos';
            if (deltaRaw.value < 0) return 'neg';
            return 'zero';
        });

        const canSubmit = computed(() => {
            if (isCapped.value) return false;
            return tBefore.value !== '' && tAfter.value !== '' &&
                !isNaN(Number(tBefore.value)) && !isNaN(Number(tAfter.value));
        });

        // Circular progress calculation
        const CIRCUMFERENCE = 2 * Math.PI * 80;
        const ringStyle = computed(() => {
            const offset = CIRCUMFERENCE - (pct.value / 100) * CIRCUMFERENCE;
            return { strokeDashoffset: offset };
        });
        
        const ringColor = computed(() => {
            if (pct.value >= 100) return '#00FFB2'; // mint
            if (pct.value >= 75) return '#FFAE42'; // amber
            return '#00D4A0'; // teal
        });

        // --- Stats Computeds ---
        const totalJournalCount = computed(() => FISH_DATABASE.length);
        
        const totalCaughtCount = computed(() => {
            return Object.keys(caughtFish.value).filter(k => caughtFish.value[k] === true).length;
        });

        const caughtPercentage = computed(() => {
            if (totalJournalCount.value === 0) return 0;
            return Math.round((totalCaughtCount.value / totalJournalCount.value) * 100);
        });

        const rarityDistribution = computed(() => {
            const counts = { Common: 0, Uncommon: 0, Rare: 0, Epic: 0, Legendary: 0 };
            const caughtList = Object.keys(caughtFish.value).filter(k => caughtFish.value[k] === true);
            
            caughtList.forEach(name => {
                const fish = FISH_DATABASE.find(f => f.name === name);
                if (fish && counts[fish.rarity] !== undefined) {
                    counts[fish.rarity]++;
                }
            });

            // Calculate percentage share
            const totalCaught = caughtList.length || 1;
            return {
                Common: { count: counts.Common, pct: Math.round((counts.Common / totalCaught) * 100) },
                Uncommon: { count: counts.Uncommon, pct: Math.round((counts.Uncommon / totalCaught) * 100) },
                Rare: { count: counts.Rare, pct: Math.round((counts.Rare / totalCaught) * 100) },
                Epic: { count: counts.Epic, pct: Math.round((counts.Epic / totalCaught) * 100) },
                Legendary: { count: counts.Legendary, pct: Math.round((counts.Legendary / totalCaught) * 100) }
            };
        });

        // --- Core Calculator Actions ---
        function submit() {
            if (!canSubmit.value) return;

            const b = Number(tBefore.value);
            const a = Number(tAfter.value);
            const delta = a - b;
            const gain = delta > 0 ? Math.min(delta, remaining.value) : 0;

            const oldTotal = total.value;
            total.value = Math.min(total.value + gain, CAP);
            if (gain > 0) lastGain.value = gain;

            const transactionHistoryItem = {
                id: Date.now(),
                before: b,
                after: a,
                delta,
                gain,
                runningTotal: total.value
            };

            history.value.push(transactionHistoryItem);
            saveAll();

            // Auto-fill next Before = current After
            tBefore.value = a;
            tAfter.value = '';
            autoFilled.value = true;

            // Trigger Confetti celebration if they just reached the 900 cap!
            if (total.value >= CAP && oldTotal < CAP) {
                showToast("🏆 DAILY TREAT CAP HIT! CONGRATS!", "🎉");
                nextTick(() => initConfetti());
            } else {
                if (delta > 0) {
                    if (gain < delta) {
                        showToast(`+${gain} treats (capped)`, '🎯');
                    } else {
                        showToast(`+${gain} treats earned!`, '🐟');
                    }
                } else if (delta === 0) {
                    showToast('No treats earned.', '➖');
                } else {
                    showToast(`${delta} treats — no gain added.`, '📉');
                }
            }
        }

        function deleteEntry(id) {
            const idx = history.value.findIndex(h => h.id === id);
            if (idx === -1) return;
            history.value.splice(idx, 1);
            
            // Recalculate totals from scratch
            total.value = 0;
            lastGain.value = null;
            history.value.forEach(h => {
                const gain = h.delta > 0 ? Math.min(h.delta, CAP - total.value) : 0;
                h.gain = gain;
                total.value = Math.min(total.value + gain, CAP);
                h.runningTotal = total.value;
                if (gain > 0) lastGain.value = gain;
            });

            saveAll();
            showToast('Entry deleted & totals recalculated.', '🗑️');
        }

        function confirmReset() {
            if (confirm("Are you sure you want to reset the current session? This will clear history and session total.")) {
                history.value = [];
                total.value = 0;
                lastGain.value = null;
                tBefore.value = '';
                tAfter.value = '';
                autoFilled.value = false;
                saveAll();
                showToast('Session reset.', '🔄');
            }
        }

        // --- Journal checklist actions ---
        function toggleCaught(fishName) {
            caughtFish.value[fishName] = !caughtFish.value[fishName];
            saveAll();
            const state = caughtFish.value[fishName] ? "Marked as caught" : "Cleared caught status";
            showToast(`${state}: ${fishName}`, "📔");
        }

        function clearChecklist() {
            if (confirm("Reset your fish collection journal checklist?")) {
                caughtFish.value = {};
                saveAll();
                showToast("Checklist cleared", "🧹");
            }
        }

        // --- JSON Backup Export/Import ---
        function exportBackup() {
            const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify({
                total: total.value,
                lastGain: lastGain.value,
                history: history.value,
                caughtFish: caughtFish.value
            }, null, 2));
            const downloadAnchorNode = document.createElement('a');
            downloadAnchorNode.setAttribute("href", dataStr);
            downloadAnchorNode.setAttribute("download", `party_animal_fishing_backup_${new Date().toISOString().slice(0,10)}.json`);
            document.body.appendChild(downloadAnchorNode);
            downloadAnchorNode.click();
            downloadAnchorNode.remove();
            showToast("Backup exported successfully!", "💾");
        }

        function importBackup(event) {
            const file = event.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = function(e) {
                try {
                    const parsed = JSON.parse(e.target.result);
                    if (parsed.total !== undefined) total.value = Math.min(Number(parsed.total), CAP);
                    if (parsed.lastGain !== undefined) lastGain.value = parsed.lastGain ? Number(parsed.lastGain) : null;
                    if (parsed.history !== undefined) history.value = parsed.history;
                    if (parsed.caughtFish !== undefined) caughtFish.value = parsed.caughtFish;
                    saveAll();
                    showToast("Backup imported successfully!", "📂");
                    // Clear input file
                    event.target.value = '';
                } catch (err) {
                    showToast("Failed to parse JSON file.", "❌");
                }
            };
            reader.readAsText(file);
        }

        // --- Filtered Fish Journal ---
        const filteredFishList = computed(() => {
            return FISH_DATABASE.filter(fish => {
                const matchSearch = fish.name.toLowerCase().includes(searchInput.value.toLowerCase()) || 
                                    fish.description.toLowerCase().includes(searchInput.value.toLowerCase()) || 
                                    fish.spots.some(s => s.toLowerCase().includes(searchInput.value.toLowerCase()));
                const matchRarity = !selectedRarity.value || fish.rarity === selectedRarity.value;
                const matchSeason = !selectedSeason.value || fish.seasons.includes(selectedSeason.value);
                const matchWeather = !selectedWeather.value || fish.weather.includes(selectedWeather.value);
                const matchLocation = !selectedLocation.value || fish.spots.includes(selectedLocation.value);
                
                return matchSearch && matchRarity && matchSeason && matchWeather && matchLocation;
            });
        });

        // --- Gear Assistant Recommendation ---
        const recommendedFish = computed(() => {
            return FISH_DATABASE.filter(fish => {
                const matchSeason = fish.seasons.includes(currentGearSeason.value);
                const matchWeather = fish.weather.includes(currentGearWeather.value);
                const matchLocation = fish.spots.includes(currentGearLocation.value);
                const matchTime = fish.times.includes(currentGearTime.value);

                return matchSeason && matchWeather && matchLocation && matchTime;
            });
        });

        const recommendedSetup = computed(() => {
            if (recommendedFish.value.length === 0) return null;
            
            const hasHeavy = recommendedFish.value.some(f => f.rod === 'Heavy');
            const hasLight = recommendedFish.value.some(f => f.rod === 'Light');

            let recommendation = "";
            let bait = "Acorns / Bread";
            let hook = "Standard Hook";

            const hasLegendary = recommendedFish.value.some(f => f.rarity === 'Legendary');
            const hasEpic = recommendedFish.value.some(f => f.rarity === 'Epic');
            
            if (hasLegendary) {
                hook = "Triple Gold Hook / Golden Hook";
                bait = "Epic Bait / Golden Bait";
            } else if (hasEpic) {
                hook = "Golden Hook / Standard Hook";
                bait = "Uncommon/Rare Bait";
            }

            if (hasHeavy && hasLight) {
                recommendation = "Both Light & Heavy fish are active. Bring Jade Bamboo (Heavy) or Hawthorn (Light) depending on which target you prioritize.";
            } else if (hasHeavy) {
                recommendation = "Only Heavy rod fish are active. Equip a Heavy Class Rod (e.g. Jade Bamboo).";
            } else {
                recommendation = "Only Light rod fish are active. Equip a Light Class Rod (e.g. Hawthorn).";
            }

            return {
                rodRecommendation: recommendation,
                hook,
                bait,
                fishCount: recommendedFish.value.length
            };
        });

        // --- Toast utility ---
        function showToast(msg, icon = '✓') {
            toastMsg.value = msg;
            toastIcon.value = icon + ' ';
            toastVisible.value = true;
            clearTimeout(toastTimer);
            toastTimer = setTimeout(() => { toastVisible.value = false; }, 2800);
        }

        // --- Lifecycles ---
        loadSavedData();

        // Watchers for safety
        watch([total, history, caughtFish], () => {
            saveAll();
        }, { deep: true });

        return {
            FISH_DATABASE,
            currentTab,
            total,
            lastGain,
            history,
            tBefore,
            tAfter,
            autoFilled,
            caughtFish,
            searchInput,
            selectedRarity,
            selectedSeason,
            selectedWeather,
            selectedLocation,
            currentGearSeason,
            currentGearWeather,
            currentGearLocation,
            currentGearTime,
            toastVisible,
            toastMsg,
            toastIcon,
            pct,
            remaining,
            isCapped,
            deltaRaw,
            cappedGain,
            deltaDisplay,
            deltaClass,
            canSubmit,
            ringStyle,
            ringColor,
            totalJournalCount,
            totalCaughtCount,
            caughtPercentage,
            rarityDistribution,
            
            submit,
            deleteEntry,
            confirmReset,
            toggleCaught,
            clearChecklist,
            exportBackup,
            importBackup,
            filteredFishList,
            recommendedFish,
            recommendedSetup,
            showToast
        };
    }
}).mount('#app');

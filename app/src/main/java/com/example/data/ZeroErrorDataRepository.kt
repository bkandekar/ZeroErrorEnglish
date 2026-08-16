package com.example.data

object ZeroErrorDataRepository {

    val books: List<Book> = listOf(
        Book(
            id = "book-01-subject-verb-agreement",
            title = "Subject-Verb Agreement: The Zero-Error Rulebook",
            subtitle = "Master 45+ High-Yield Rules, Inverted Syntax & Trap Exceptions for SSC, IBPS & UPSC",
            series = "Fasttrack English Grammar Series — Book 1",
            category = "Syntax & Agreement",
            topic = "Subject-Verb Agreement",
            exams = listOf("SSC CGL", "IBPS PO", "UPSC CDS", "State PSC", "RRB NTPC"),
            price = "₹149",
            originalPrice = "₹299",
            rating = 4.9,
            reviews = 482,
            badge = "Bestseller",
            amazonUrl = "https://www.amazon.in/dp/B0EXAMPLE01",
            description = "Eliminate error-spotting blunders with the revolutionary 'Bracket Elimination Method'. Covers inverted sentence traps, collective noun anomalies, proximity rule vs. real subject dilemmas, and 250+ previous year questions from 2012-2025.",
            features = listOf(
                "45+ High-Yield Rules with PYQ References (2012-2025)",
                "Bracket Elimination Method to isolate parenthetical clutter",
                "250+ Practice MCQs with Step-by-Step Mentor Explanations",
                "Exam-Specific Frequency Charts for SSC CGL & Bank PO"
            ),
            accentColorHex = "#F5A623",
            sampleRules = listOf(
                RuleSnippet(
                    ruleTitle = "Inverted Sentence Subject Agreement",
                    formula = "[Prepositional Phrase] + Verb + [Real Post-Positioned Subject]",
                    wrong = "[Along the northern borders] [of India] lies the majestic Himalayan peaks.",
                    correct = "[Along the northern borders] [of India] lie the majestic Himalayan peaks.",
                    explanation = "Bracket out modifying phrases. The real subject 'peaks' is plural, requiring 'lie'."
                ),
                RuleSnippet(
                    ruleTitle = "Parenthetical Connectors (as well as, along with)",
                    formula = "Subject 1 + (as well as / together with / along with + Subject 2) + Verb (agrees with Subject 1)",
                    wrong = "The captain, as well as the crew members, were awarded medals.",
                    correct = "The captain, as well as the crew members, was awarded medals.",
                    explanation = "The parenthetical phrase 'as well as the crew members' does not alter the singular subject 'The captain'."
                )
            )
        ),
        Book(
            id = "book-02-tenses-and-time-aspects",
            title = "Tenses & Time Aspects: The Sequence Blueprint",
            subtitle = "Decode Conditional Sentences, Perfect Aspect Traps & Time Adverbial Triggers",
            series = "Fasttrack English Grammar Series — Book 2",
            category = "Verbs & Tenses",
            topic = "Tenses & Conditionals",
            exams = listOf("SSC CGL", "IBPS PO", "UPSC CDS", "CBSE Class 12", "MPSC"),
            price = "₹149",
            originalPrice = "₹299",
            rating = 4.8,
            reviews = 395,
            badge = "Must Read",
            amazonUrl = "https://www.amazon.in/dp/B0EXAMPLE02",
            description = "Stop confusing Present Perfect with Simple Past. This comprehensive guide clarifies the Sequence of Tenses in subordinate clauses, Zero/1st/2nd/3rd/Mixed Conditionals, and tricky time conjunctions (since, for, until, by the time).",
            features = listOf(
                "Timeline Diagrams for all 12 Tenses & Compound Aspects",
                "Complete Conditional Matrix (0, 1st, 2nd, 3rd & Mixed)",
                "Time Conjunction Triggers (Since vs For, By the time vs When)",
                "180+ Error Spotting & Sentence Improvement PYQs"
            ),
            accentColorHex = "#48CAE4",
            sampleRules = listOf(
                RuleSnippet(
                    ruleTitle = "Third Conditional (Had + Would Have)",
                    formula = "If + Past Perfect (had + V3), Main Clause (would have + V3)",
                    wrong = "If you would have informed me earlier, I would have accompanied you.",
                    correct = "If you had informed me earlier, I would have accompanied you.",
                    explanation = "The If-clause can NEVER contain modal 'would have'. Use 'had + V3'."
                )
            )
        ),
        Book(
            id = "book-03-direct-and-indirect-speech",
            title = "Direct & Indirect Speech: The Transformation Blueprint",
            subtitle = "Universal Formulas for Universal Truths, Optative Sentences & Modals",
            series = "Fasttrack English Grammar Series — Book 3",
            category = "Sentence Transformation",
            topic = "Narration",
            exams = listOf("SSC CGL Tier 2", "SSC CHSL", "NDA/CDS", "State PSC"),
            price = "₹149",
            originalPrice = "₹299",
            rating = 4.8,
            reviews = 310,
            badge = "Top Rated",
            amazonUrl = "https://www.amazon.in/dp/B0EXAMPLE03",
            description = "SSC CGL Tier 2 awards up to 27 marks for Narration. Master change of pronouns, backshifting of tenses, reporting verb substitutions, and exceptions to tense changes in historical truths and proverbs.",
            features = listOf(
                "10-Second Transformation Technique for SSC Tier 2",
                "Reporting Verb Switch Tables (exclaimed, urged, forbade, warned)",
                "Pronoun Shift Memory Grid (SON Formula: Subject-Object-No Change)",
                "300+ Solved PYQs with Common Exam Traps Highlighted"
            ),
            accentColorHex = "#F5A623"
        ),
        Book(
            id = "book-04-active-and-passive-voice",
            title = "Active & Passive Voice: Voice Modulation & Mechanics",
            subtitle = "From Imperative Commands to Quasi-Passive & Inverted Structures",
            series = "Fasttrack English Grammar Series — Book 4",
            category = "Sentence Transformation",
            topic = "Voice Transformation",
            exams = listOf("SSC CGL Tier 2", "SSC CHSL", "CDS", "State Judiciary", "MPSC"),
            price = "₹149",
            originalPrice = "₹299",
            rating = 4.9,
            reviews = 365,
            badge = "Exam Essential",
            amazonUrl = "https://www.amazon.in/dp/B0EXAMPLE04",
            description = "Another heavyweight topic for SSC Tier 2. Learn how to transform sentences with two objects, imperative orders/requests, interrogatives with 'Who/Whom', prepositional verbs, and quasi-passive constructions like 'Sugar tastes sweet'.",
            features = listOf(
                "Tense-to-Voice Conversion Matrix in 1 Page",
                "Quasi-Passive & Modal Passive Special Rules",
                "Preposition Retaining Rules ('laughed at' -> 'was laughed at by')",
                "220+ Tier 2 Specific MCQs with detailed elimination steps"
            ),
            accentColorHex = "#38BDF8"
        ),
        Book(
            id = "book-05-prepositions-and-phrasal-verbs",
            title = "Prepositions & Phrasal Verbs: The Visual Master Guide",
            subtitle = "500+ Fixed Prepositions & High-Frequency Phrasal Verbs with Memory Associations",
            series = "Fasttrack English Grammar Series — Book 5",
            category = "Vocabulary & Usage",
            topic = "Prepositions & Phrasals",
            exams = listOf("IBPS PO", "SBI PO", "SSC CGL", "UPSC CDS", "RRB NTPC"),
            price = "₹199",
            originalPrice = "₹349",
            rating = 4.9,
            reviews = 620,
            badge = "Bestseller",
            amazonUrl = "https://www.amazon.in/dp/B0EXAMPLE05",
            description = "Prepositions cause the highest error rate in competitive exams. This visual guide groups fixed prepositions by emotional/contextual roots and breaks down confusing phrasal verbs (e.g., look for, look into, look down upon, look after) with mnemonic anchors.",
            features = listOf(
                "500+ Exam-Tested Fixed Preposition Pairs",
                "Phrasal Verb Family Trees (Take, Put, Look, Bring, Call)",
                "Spatial & Temporal Preposition Diagrams",
                "Fill-in-the-Blank & Cloze Test Drills (350+ Questions)"
            ),
            accentColorHex = "#F5A623"
        ),
        Book(
            id = "book-06-non-finite-verbs",
            title = "Non-Finite Verbs: Infinitives, Gerunds & Participles",
            subtitle = "Dangling Modifiers, Bare Infinitives & Verbal Noun Disambiguation",
            series = "Fasttrack English Grammar Series — Book 6",
            category = "Verbs & Tenses",
            topic = "Non-Finites",
            exams = listOf("SSC CGL", "IBPS PO", "UPSC CDS", "State PSC"),
            price = "₹149",
            originalPrice = "₹299",
            rating = 4.8,
            reviews = 278,
            badge = "Top Rated",
            amazonUrl = "https://www.amazon.in/dp/B0EXAMPLE06",
            description = "Solve the infamous dangling participle error once and for all. Master verbs followed strictly by Gerunds vs. Infinitives (look forward to + V-ing, used to, avoid, admit, decide), and understand bare infinitive triggers (make, let, bid, see).",
            features = listOf(
                "Gerund vs Infinitive Decisive Cheat Sheet",
                "Dangling Participle Quick-Detection Rule",
                "Bare Infinitive Exception Catalog",
                "150+ Advanced Error-Spotting Drills"
            ),
            accentColorHex = "#38BDF8"
        ),
        Book(
            id = "book-07-spotting-the-error-bracket-method",
            title = "Spotting the Error: The Bracket-Elimination System",
            subtitle = "Step-by-Step Algorithmic Approach to 100% Accuracy in Error Detection",
            series = "Fasttrack English Grammar Series — Book 7",
            category = "Exam Strategy",
            topic = "Error Spotting",
            exams = listOf("SSC CGL", "IBPS PO", "SBI Clerk", "RRB NTPC", "UPSC CDS", "MPSC"),
            price = "₹199",
            originalPrice = "₹399",
            rating = 5.0,
            reviews = 740,
            badge = "Bestseller",
            amazonUrl = "https://www.amazon.in/dp/B0EXAMPLE07",
            description = "The crown jewel of the Zero Error method. Rather than relying on intuition or 'sounds wrong' guesswork, use our 5-step bracket elimination protocol: Subject-Verb check -> Tense consistency -> Modifier placement -> Pronoun reference -> Parallelism.",
            features = listOf(
                "The 5-Step Bracket Elimination Algorithm",
                "Top 50 Most Frequently Repeated Exam Traps",
                "500+ Graded Practice Sentences (Basic to Advanced Tier 2)",
                "Zero-Intuition Rule-Driven Solution Framework"
            ),
            accentColorHex = "#F5A623"
        ),
        Book(
            id = "book-08-cloze-test-mastery",
            title = "Cloze Test Mastery: Context Clues & Collocations",
            subtitle = "How to Score Full Marks in Banking & SSC Cloze Tests Without Guessing",
            series = "Fasttrack English Grammar Series — Book 8",
            category = "Comprehension & Vocabulary",
            topic = "Cloze Test",
            exams = listOf("IBPS PO", "SBI PO", "SSC CGL", "RBI Grade B"),
            price = "₹149",
            originalPrice = "₹299",
            rating = 4.8,
            reviews = 312,
            badge = "Exam Essential",
            amazonUrl = "https://www.amazon.in/dp/B0EXAMPLE08",
            description = "Cloze tests test grammar, collocations, tone, and logical progression simultaneously. Learn backward-forward context reading, tone detection, and collocation pairing tricks to eliminate 3 out of 4 options immediately.",
            features = listOf(
                "Forward-Backward Reading Strategy",
                "Collocation Power Index (Words that travel together)",
                "Tone Matching & Conjunction Clue Method",
                "60+ Real Exam Cloze Passages with Detailed Solutions"
            ),
            accentColorHex = "#90BE6D"
        ),
        Book(
            id = "book-09-reading-comprehension-parajumbles",
            title = "Reading Comprehension & Parajumbles: The Linker Formula",
            subtitle = "Speed-Scanning, Question-First Techniques & Mandatory Pair Detection",
            series = "Fasttrack English Grammar Series — Book 9",
            category = "Comprehension & Vocabulary",
            topic = "RC & Sentence Rearrangement",
            exams = listOf("IBPS PO", "SBI PO", "SSC CGL", "UPSC CSAT", "CAT"),
            price = "₹199",
            originalPrice = "₹349",
            rating = 4.9,
            reviews = 430,
            badge = "Top Rated",
            amazonUrl = "https://www.amazon.in/dp/B0EXAMPLE09",
            description = "Crack 800-word passages in under 5 minutes without losing accuracy. Master the 'Mandatory Pair Formula' (Noun-Pronoun links, Chronology triggers, Conjunction bridges) for foolproof Sentence Rearrangement / Parajumbles.",
            features = listOf(
                "Speed Scanning & Keyword Targeting System",
                "Mandatory Pair Identification for Parajumbles",
                "Inference vs Direct Question Dissection",
                "50+ Long Passages & 100+ Parajumbles with Link Explanations"
            ),
            accentColorHex = "#F5A623"
        ),
        Book(
            id = "book-10-articles-and-determiners",
            title = "Articles & Determiners: Zero Article Traps & Nuances",
            subtitle = "Definite, Indefinite & Zero Article Rules That Examiners Love to Test",
            series = "Fasttrack English Grammar Series — Book 10",
            category = "Core Grammar",
            topic = "Articles & Determiners",
            exams = listOf("SSC CGL", "SSC CHSL", "NDA/CDS", "State PSC", "CBSE 12"),
            price = "₹129",
            originalPrice = "₹249",
            rating = 4.7,
            reviews = 215,
            badge = "Must Read",
            amazonUrl = "https://www.amazon.in/dp/B0EXAMPLE10",
            description = "Articles are deceptively simple but full of traps. Master geographical names, institutions, determiners (few vs a few vs the few, little vs a little), and omission of articles.",
            features = listOf(
                "Zero Article Rules (When NOT to use an article)",
                "Little vs A Little / Few vs A Few Flowchart",
                "Geographical & Institutional Noun Rules",
                "150+ Exam-Style Spotting the Error Sentences"
            ),
            accentColorHex = "#4CC9F0"
        ),
        Book(
            id = "book-11-pronouns-and-antecedents",
            title = "Pronouns & Antecedent Consistency: Case & Agreement Guide",
            subtitle = "Relative Pronouns (Who/Whom/Which/That), Reflexive Traps & Case Rules",
            series = "Fasttrack English Grammar Series — Book 11",
            category = "Core Grammar",
            topic = "Pronouns",
            exams = listOf("SSC CGL", "IBPS PO", "UPSC CDS", "RRB NTPC"),
            price = "₹129",
            originalPrice = "₹249",
            rating = 4.8,
            reviews = 245,
            badge = "Exam Essential",
            amazonUrl = "https://www.amazon.in/dp/B0EXAMPLE11",
            description = "Stop falling for 'who vs whom' and 'each other vs one another'. This book breaks down subjective vs objective cases after 'than' and 'between', reflexive verbs, and relative pronoun antecedent agreements.",
            features = listOf(
                "Who vs Whom 3-Second Subject/Object Test",
                "Mandatory Reflexive Verbs Masterlist",
                "Order of Pronouns Rule (231 for Good / 123 for Fault)",
                "160+ High-Yield Practice Questions"
            ),
            accentColorHex = "#F5A623"
        ),
        Book(
            id = "book-12-adjectives-and-adverbs",
            title = "Adjectives & Adverbs: Inversion Rules & Comparisons",
            subtitle = "Order of Adjectives, Negative Adverbial Inversion & Tricky Modifiers",
            series = "Fasttrack English Grammar Series — Book 12",
            category = "Core Grammar",
            topic = "Modifiers & Inversion",
            exams = listOf("SSC CGL", "IBPS PO", "UPSC CDS", "State PSC"),
            price = "₹149",
            originalPrice = "₹299",
            rating = 4.8,
            reviews = 289,
            badge = "Top Rated",
            amazonUrl = "https://www.amazon.in/dp/B0EXAMPLE12",
            description = "Understand the Royal Order of Adjectives (OSASCOMP), Latin comparative adjectives (senior, junior, prefer to - NOT than), and negative adverbial inversions (Hardly had he..., Seldom do we..., No sooner did...).",
            features = listOf(
                "OSASCOMP Mnemonic for Adjective Sequencing",
                "Inversion Sentence Structures with Negative Adverbs",
                "Latin Adjectives & Comparative Exceptions",
                "180+ Practice Drills with Detailed Rule Annotations"
            ),
            accentColorHex = "#CAF0F8"
        ),
        Book(
            id = "book-13-conjunctions-and-connectors",
            title = "Conjunctions & Connectors: Correlative Pairs & Parallelism",
            subtitle = "Not only... but also, Scarcely... when, Lest... should & Parallel Structures",
            series = "Fasttrack English Grammar Series — Book 13",
            category = "Core Grammar",
            topic = "Conjunctions & Parallelism",
            exams = listOf("SSC CGL", "IBPS PO", "RRB NTPC", "State PSC"),
            price = "₹129",
            originalPrice = "₹249",
            rating = 4.9,
            reviews = 310,
            badge = "Must Read",
            amazonUrl = "https://www.amazon.in/dp/B0EXAMPLE13",
            description = "Parallelism and conjunction pairs represent 15% of all error spotting questions. Master correlative conjunctions (Either...or, Neither...nor, Although...yet), 'Lest' followed only by 'Should', and parallel clause balancing.",
            features = listOf(
                "Correlative Conjunctions Alignment Rules",
                "Lest / Scarcely / Hardly / No Sooner Connector Formula",
                "Faulty Parallelism Repair Techniques",
                "170+ Real Exam Questions with Step-by-Step Solutions"
            ),
            accentColorHex = "#F5A623"
        ),
        Book(
            id = "book-14-idioms-phrases-one-word-substitutions",
            title = "Idioms, Phrases & One-Word Substitutions: 2500+ PYQ Masterlist",
            subtitle = "High-Yield Memory Mnemonics, Etymological Roots & Frequency Classification",
            series = "Fasttrack English Grammar Series — Book 14",
            category = "Vocabulary & Usage",
            topic = "Idioms & OWS",
            exams = listOf("SSC CGL", "SSC CHSL", "UPSC CDS", "IBPS PO", "State PSC", "RRB"),
            price = "₹199",
            originalPrice = "₹399",
            rating = 4.9,
            reviews = 820,
            badge = "Bestseller",
            amazonUrl = "https://www.amazon.in/dp/B0EXAMPLE14",
            description = "The ultimate vocabulary companion for competitive exams. Features 1500+ One Word Substitutions categorized by themes and 1000+ Idioms with origins and memory hooks.",
            features = listOf(
                "2500+ High-Frequency Exam Entries (1997-2025)",
                "Thematic Groupings (Phobias, Manias, Political systems)",
                "Historical Story & Visual Mnemonic for Every Idiom",
                "20 Comprehensive Self-Assessment Speed Tests"
            ),
            accentColorHex = "#F5A623"
        ),
        Book(
            id = "book-15-vocabulary-root-words-synonyms-antonyms",
            title = "Vocabulary Booster: Root Words, Synonyms & Antonyms",
            subtitle = "Learn 3,000 Words Through 200 Latin & Greek Roots with Contextual Usage",
            series = "Fasttrack English Grammar Series — Book 15",
            category = "Vocabulary & Usage",
            topic = "Root Words & Vocab",
            exams = listOf("SSC CGL", "IBPS PO", "CAT", "UPSC CSAT", "GRE", "NDA/CDS"),
            price = "₹199",
            originalPrice = "₹399",
            rating = 4.9,
            reviews = 690,
            badge = "Bestseller",
            amazonUrl = "https://www.amazon.in/dp/B0EXAMPLE15",
            description = "Stop rote memorization! One Latin root like 'BEN/BENE' (good) instantly unlocks 25 words (benefactor, benevolent, benediction, benign). Learn 200 high-power roots and master subtle tone shades.",
            features = listOf(
                "200 Latin & Greek Roots Unlocking 3,000+ Words",
                "Tone & Connotation Nuances (Slender vs Skinny vs Emaciated)",
                "Confusable Word Pairs (Affect vs Effect, Compliment vs Complement)",
                "Mnemonic Memory Hooks & Daily 15-Minute Vocab Routine"
            ),
            accentColorHex = "#22D3EE"
        ),
        Book(
            id = "book-16-descriptive-english-writing-blueprint",
            title = "Descriptive English Writing: Essays, Letters & Précis",
            subtitle = "Proven Formats, High-Scoring Vocab & Model Answers for Tier 2/3 & Mains",
            series = "Fasttrack English Grammar Series — Book 16",
            category = "Descriptive Writing",
            topic = "Essays, Letters & Précis",
            exams = listOf("SSC CGL Tier 2", "SBI PO Descriptive", "IBPS PO Mains", "UPSC CAPF", "State PSC"),
            price = "₹199",
            originalPrice = "₹399",
            rating = 4.9,
            reviews = 510,
            badge = "Top Rated",
            amazonUrl = "https://www.amazon.in/dp/B0EXAMPLE16",
            description = "Ace descriptive papers with structural templates for Formal/Informal letters, Government/Editor correspondence, Socio-Economic Essay frameworks, and 1/3-word précis compression formulas.",
            features = listOf(
                "30+ Standard Essay Blueprints (Economy, Tech, Society, Environment)",
                "Letter Writing Formats with Scoring Salutations & Sign-offs",
                "Précis Writing 5-Rule Condensation Strategy",
                "Grammar Checklist to Avoid Costly Minus Marking in Mains"
            ),
            accentColorHex = "#F5A623"
        )
    )

    val lessons: List<Lesson> = listOf(
        Lesson(
            id = "subject-verb-agreement-inverted-sentences",
            slug = "subject-verb-agreement-inverted-sentences",
            title = "Subject-Verb Agreement in Inverted Sentences: The 3-Second Bracket Rule",
            excerpt = "Why your ear betrays you when the verb precedes the subject, and how the 22-year bracket elimination formula isolates the real noun.",
            category = "Syntax & Agreement",
            tags = listOf("Subject-Verb Agreement", "Inversion", "SSC CGL", "IBPS PO", "PYQs"),
            readingTime = "6 min read",
            publishDate = "August 10, 2026",
            featured = true,
            sections = listOf(
                LessonSection(
                    heading = "The Trap: Why Intuition Fails in Inversion",
                    body = "In natural speech, we place the Subject before the Verb. But competitive examiners deliberately invert word order, placing long prepositional phrases at the start to trick your ear into matching the verb with the nearest noun object.",
                    wrongExample = "Along the northern borders of India lies the majestic Himalayan peaks.",
                    correctExample = "Along the northern borders of India lie the majestic Himalayan peaks.",
                    bracketBreakdown = "[Along the northern borders] [of India] lie (Plural Verb) the majestic Himalayan peaks (Plural Subject)."
                ),
                LessonSection(
                    heading = "The 3-Second Bracket Elimination Protocol",
                    body = "1. Mentally enclose every prepositional phrase [in, on, at, along, between, among, under, of] in brackets.\n2. Ask: 'Who or what is performing the action?'\n3. Locate the noun following the verb and match the number directly.",
                    note = "Rule: A noun inside a prepositional phrase can NEVER be the grammatical subject of the sentence."
                ),
                LessonSection(
                    heading = "Negative Adverb Inversion (Hardly, Seldom, Scarcely, Never)",
                    body = "When a sentence starts with a restrictive or negative adverb, inverted auxiliary syntax is mandatory.",
                    wrongExample = "Hardly I had reached the station when the train left.",
                    correctExample = "Hardly had I reached the station when the train left."
                )
            )
        ),
        Lesson(
            id = "conditional-sentences-if-clause-traps",
            slug = "conditional-sentences-if-clause-traps",
            title = "Conditional Sentences: How SSC & IBPS Trick You with 'Had + Would Have'",
            excerpt = "Master the non-negotiable conditional matrix: Zero, First, Second, Third & Inverted conditionals.",
            category = "Verbs & Tenses",
            tags = listOf("Conditionals", "Tenses", "If-Clause", "SSC CGL", "IBPS PO"),
            readingTime = "5 min read",
            publishDate = "August 14, 2026",
            featured = false,
            sections = listOf(
                LessonSection(
                    heading = "The Non-Negotiable Law of If-Clauses",
                    body = "The conditional 'If-clause' can NEVER contain modal auxiliaries like will, shall, would, could, or would have.",
                    wrongExample = "If the committee would have finalized the policy, funds would have been released.",
                    correctExample = "If the committee had finalized the policy, funds would have been released."
                ),
                LessonSection(
                    heading = "The 4 Conditional Formulas at a Glance",
                    body = "• Zero: If + Present (V1) -> Present (V1) (Scientific Facts)\n• First: If + Present (V1) -> will/can + V1 (Probable Future)\n• Second: If + Past (V2/were) -> would + V1 (Unreal Present)\n• Third: If + Past Perfect (had + V3) -> would have + V3 (Unfulfilled Past)"
                ),
                LessonSection(
                    heading = "Inverted Conditionals (Without 'If')",
                    body = "High-tier exam papers drop 'If' completely:\n• Standard: If he had informed us...\n• Inverted: Had he informed us, we would have prepared.\n• Subjunctive: Were I in your position, I would accept."
                )
            )
        ),
        Lesson(
            id = "participle-clauses-dangling-modifiers",
            slug = "participle-clauses-dangling-modifiers",
            title = "Dangling Modifiers: Why 'Walking in the Park, a Snake Bit Him' Is Fatal",
            excerpt = "Learn how unattached participles distort logical meaning and how to anchor the subject in 2 seconds.",
            category = "Verbs & Tenses",
            tags = listOf("Participles", "Modifiers", "SSC CGL", "Error Spotting"),
            readingTime = "4 min read",
            publishDate = "August 20, 2026",
            featured = false,
            sections = listOf(
                LessonSection(
                    heading = "The Logic of Introductory Participles",
                    body = "When an introductory participle phrase (starting with V-ing or V3) opens a sentence, its subject of reference defaults strictly to the noun immediately following the comma.",
                    wrongExample = "Entering the room, the lights went out.",
                    correctExample = "When I entered the room, the lights went out."
                ),
                LessonSection(
                    heading = "The Impersonal 'It' Fix for Weather & Time",
                    body = "Introductory participle clauses describing weather or day require dummy pronoun 'It'.",
                    wrongExample = "Being a rainy day, we stayed at home.",
                    correctExample = "It being a rainy day, we stayed at home."
                )
            )
        ),
        Lesson(
            id = "gerund-vs-infinitive-exam-rules",
            slug = "gerund-vs-infinitive-exam-rules",
            title = "Gerund vs Infinitive: The High-Yield 'Prepositional TO' Masterlist",
            excerpt = "Why we say 'look forward to meeting' and not 'look forward to meet'. Master the 8 fixed expressions.",
            category = "Core Grammar",
            tags = listOf("Gerunds", "Infinitives", "Bank PO", "Prepositions"),
            readingTime = "5 min read",
            publishDate = "August 25, 2026",
            featured = false,
            sections = listOf(
                LessonSection(
                    heading = "When 'TO' is a Preposition, NOT an Infinitive Marker",
                    body = "Normally, 'to' takes bare verb (to go, to eat). But in fixed idioms, 'to' is a preposition and must take a Gerund (V-ing) or Noun.",
                    wrongExample = "I look forward to meet you at the seminar.",
                    correctExample = "I look forward to meeting you at the seminar."
                ),
                LessonSection(
                    heading = "The Mandatory Gerund Fixed Expressions",
                    body = "• Look forward to + V-ing\n• With a view to + V-ing\n• Accustomed / Used to + V-ing (when preceded by be/get)\n• Prone to + V-ing\n• Averse to / Object to + V-ing\n• Devoted / Dedicated to + V-ing"
                )
            )
        )
    )

    val quizQuestions: List<QuizQuestion> = listOf(
        QuizQuestion(
            id = 1,
            exam = "SSC CGL Tier 2",
            topic = "Inversion & Agreement",
            sentence = "Along the bank of the turbulent river [A] / was found several ancient artifacts [B] / belonging to the Harappan civilization [C].",
            options = listOf(
                QuizOption("A - Along the bank of", false),
                QuizOption("B - was found several ancient", true),
                QuizOption("C - belonging to the Harappan", false),
                QuizOption("D - No Error", false)
            ),
            explanation = "In this inverted sentence, bracket out [Along the bank] [of the turbulent river]. The post-positioned real subject is 'several ancient artifacts' (Plural). Therefore, replace singular 'was found' with plural 'were found'.",
            bracketAnalysis = "[Along the bank] [of the turbulent river] WERE FOUND (Plural Verb) several ancient artifacts (Plural Subject)."
        ),
        QuizQuestion(
            id = 2,
            exam = "IBPS PO Mains",
            topic = "Third Conditional",
            sentence = "If the committee would have finalized [A] / the guidelines on time [B] / the disbursement could proceed smoothly [C].",
            options = listOf(
                QuizOption("A - If the committee would have finalized", true),
                QuizOption("B - the guidelines on time", false),
                QuizOption("C - the disbursement could proceed", false),
                QuizOption("D - No Error", false)
            ),
            explanation = "The conditional 'If-clause' can NEVER contain 'would have'. Replace 'would have finalized' with Past Perfect 'had finalized' (Third Conditional rule).",
            bracketAnalysis = "If the committee [HAD FINALIZED] ... the disbursement [WOULD HAVE PROCEEDED]."
        ),
        QuizQuestion(
            id = 3,
            exam = "UPSC CDS",
            topic = "Correlative Conjunctions",
            sentence = "Scarcely had the candidate [A] / entered the exam venue [B] / than the chief superintendent announced the instructions [C].",
            options = listOf(
                QuizOption("A - Scarcely had the candidate", false),
                QuizOption("B - entered the exam venue", false),
                QuizOption("C - than the chief superintendent", true),
                QuizOption("D - No Error", false)
            ),
            explanation = "'Scarcely' and 'Hardly' are always followed by 'when' or 'before', NEVER 'than' ('than' is reserved strictly for 'No sooner'). Replace 'than' with 'when'.",
            bracketAnalysis = "Scarcely had + S + V3 ... WHEN (not than)"
        ),
        QuizQuestion(
            id = 4,
            exam = "SSC CGL Tier 1",
            topic = "Parenthetical Connectors",
            sentence = "The minister with his personal advisors [A] / have left for the international summit [B] / in Geneva yesterday [C].",
            options = listOf(
                QuizOption("A - The minister with his", false),
                QuizOption("B - have left for the", true),
                QuizOption("C - in Geneva yesterday", false),
                QuizOption("D - No Error", false)
            ),
            explanation = "When two nouns are joined by 'with', 'along with', 'as well as', 'together with', the verb agrees exclusively with the FIRST subject ('The minister' = singular). Replace 'have left' with 'has left'.",
            bracketAnalysis = "The minister [with his personal advisors] HAS LEFT (Singular)."
        ),
        QuizQuestion(
            id = 5,
            exam = "SBI PO Mains",
            topic = "Prepositional TO & Gerunds",
            sentence = "With a view to facilitate [A] / cross-border trade transactions [B] / the central bank revised the foreign exchange limits [C].",
            options = listOf(
                QuizOption("A - With a view to facilitate", true),
                QuizOption("B - cross-border trade transactions", false),
                QuizOption("C - the central bank revised", false),
                QuizOption("D - No Error", false)
            ),
            explanation = "The fixed phrase 'with a view to' acts as a prepositional lock and MUST be followed by a Gerund (V-ing). Replace 'facilitate' with 'facilitating'.",
            bracketAnalysis = "With a view to + FACILITATING (Gerund V-ing)."
        ),
        QuizQuestion(
            id = 6,
            exam = "State PSC / MPSC",
            topic = "Negative Conjunction (Lest)",
            sentence = "Walk cautiously on the icy pavement [A] / lest you should not slip [B] / and injure your knee [C].",
            options = listOf(
                QuizOption("A - Walk cautiously on", false),
                QuizOption("B - lest you should not slip", true),
                QuizOption("C - and injure your knee", false),
                QuizOption("D - No Error", false)
            ),
            explanation = "'Lest' already has a negative meaning ('for fear that'). Therefore, 'not' can NEVER be used after 'lest'. Replace 'lest you should not slip' with 'lest you should slip'.",
            bracketAnalysis = "Lest + Subject + SHOULD (without 'not')."
        ),
        QuizQuestion(
            id = 7,
            exam = "SSC CHSL",
            topic = "Pronoun Etiquette (231 Rule)",
            sentence = "I, you and he [A] / will manage the cultural event [B] / scheduled for next Sunday [C].",
            options = listOf(
                QuizOption("A - I, you and he", true),
                QuizOption("B - will manage the cultural", false),
                QuizOption("C - scheduled for next Sunday", false),
                QuizOption("D - No Error", false)
            ),
            explanation = "For normal sentences and positive deeds, the order of personal pronouns is 2nd -> 3rd -> 1st person (231 Rule). The correct sequence is 'You, he and I'.",
            bracketAnalysis = "231 Order: You (2nd) + he (3rd) + and I (1st)."
        ),
        QuizQuestion(
            id = 8,
            exam = "UPSC NDA",
            topic = "Dangling Modifier",
            sentence = "Being a cold morning [A] / he decided not to step out [B] / for his regular workout [C].",
            options = listOf(
                QuizOption("A - Being a cold morning", true),
                QuizOption("B - he decided not to step", false),
                QuizOption("C - for his regular workout", false),
                QuizOption("D - No Error", false)
            ),
            explanation = "Without an introductory subject, 'Being a cold morning' wrongly attaches to 'he', implying that 'he was a cold morning'. Add the dummy subject 'It': 'It being a cold morning'.",
            bracketAnalysis = "[It being a cold morning], he decided..."
        )
    )

    val mnemonicCards: List<MnemonicCard> = listOf(
        MnemonicCard(
            id = 1,
            ruleNumber = "Rule #1",
            keyword = "OSASCOMP Formula",
            frontDesc = "How to sequence multiple adjectives before a noun without guessing by sound.",
            title = "Opinion • Size • Age • Shape • Color • Origin • Material • Purpose",
            formula = "O (Opinion) -> S (Size) -> A (Age) -> S (Shape) -> C (Color) -> O (Origin) -> M (Material) -> P (Purpose)",
            backDesc = "Follow this strict order whenever multiple descriptive adjectives modify a single noun.",
            example = "✅ A lovely (Opinion) little (Size) old (Age) rectangular (Shape) brown (Color) Italian (Origin) leather (Material) handbag.",
            category = "Adjectives & Modifiers"
        ),
        MnemonicCard(
            id = 2,
            ruleNumber = "Rule #2",
            keyword = "The 231 vs 123 Pronoun Rule",
            frontDesc = "Order of personal pronouns in good deeds versus admissions of fault.",
            title = "231 (Virtue / Good Deeds) vs 123 (Fault / Crime / Confession)",
            formula = "Positive: 2nd (You) -> 3rd (He/She/They) -> 1st (I/We)\nNegative: 1st (I/We) -> 2nd (You) -> 3rd (He/She/They)",
            backDesc = "Etiquette rule: Give credit to others first (231), but take the blame first when admitting a blunder (123).",
            example = "Good: 'You, he and I cleared the cutoff.' (231)\nFault: 'I, you and he made the mistake.' (123)",
            category = "Pronouns"
        ),
        MnemonicCard(
            id = 3,
            ruleNumber = "Rule #3",
            keyword = "LEST... SHOULD Conjunction Lock",
            frontDesc = "Why 'lest' triggers negative errors in 90% of exam papers.",
            title = "'Lest' inherently means 'for fear that' (Negative)",
            formula = "Lest + Subject + SHOULD + V1 (NEVER use 'not' or 'will/may')",
            backDesc = "Because 'lest' is already negative, adding 'not' creates a fatal double negative.",
            example = "❌ Work hard lest you should not fail.\n✅ Work hard lest you should fail.",
            category = "Conjunctions"
        ),
        MnemonicCard(
            id = 4,
            ruleNumber = "Rule #4",
            keyword = "Prepositional 'TO' Gerund List",
            frontDesc = "Fixed expressions where 'to' is a preposition requiring Gerund (V-ing).",
            title = "Look forward to • With a view to • Used to • Prone to",
            formula = "Fixed Preposition Phrase + GERUND (V-ing)",
            backDesc = "These 6 phrases lock in a Gerund, not a bare infinitive.",
            example = "• Look forward to + meeting\n• With a view to + enhancing\n• Accustomed to + working\n• Prone to + making errors",
            category = "Non-Finite Verbs"
        ),
        MnemonicCard(
            id = 5,
            ruleNumber = "Rule #5",
            keyword = "Negative Inversion Auxiliaries",
            frontDesc = "Inversion formula triggered when a sentence opens with a negative adverb.",
            title = "Hardly / Scarcely / Seldom / Never / No Sooner",
            formula = "Negative Adverb + Auxiliary Verb (had / did / does) + Subject + Main Verb",
            backDesc = "When restrictive adverbs lead the sentence, subject and auxiliary must invert.",
            example = "❌ Seldom he visits the library.\n✅ Seldom does he visit the library.\n✅ Hardly had I arrived when the phone rang.",
            category = "Inversion & Syntax"
        ),
        MnemonicCard(
            id = 6,
            ruleNumber = "Rule #6",
            keyword = "Uncountable Noun Trap List",
            frontDesc = "Nouns that never take plural 's' or indefinite article 'a/an'.",
            title = "Furniture, Advice, Luggage, Baggage, Information, Scenery, Poetry",
            formula = "Always Singular Verb | Never 'Furnitures' or 'Advices'",
            backDesc = "To make them countable, use: 'a piece of advice', 'two articles of furniture', 'items of luggage'.",
            example = "❌ The sceneries of Kashmir are captivating.\n✅ The scenery of Kashmir is captivating.",
            category = "Nouns & Determiners",
            bookRef = "Book 8"
        ),
        MnemonicCard(
            id = 7,
            ruleNumber = "Rule #7",
            keyword = "NO SOONER... THAN Correlative",
            frontDesc = "Why exam setters trap you with 'when' instead of 'than'.",
            title = "Comparative Adverb Conjunction Lock",
            formula = "No sooner + (had + S + V3 / did + S + V1) + THAN + Clause",
            backDesc = "'Sooner' is comparative (-er), which strictly requires 'THAN' (not when / then).",
            example = "❌ No sooner had the bell rung when the students rushed out.\n✅ No sooner had the bell rung THAN the students rushed out.",
            category = "Conjunctions",
            bookRef = "Book 5"
        ),
        MnemonicCard(
            id = 8,
            ruleNumber = "Rule #8",
            keyword = "THE NUMBER OF vs. A NUMBER OF",
            frontDesc = "Definite count vs. Indefinite quantity agreement trick.",
            title = "Definite 'The' = Singular | Indefinite 'A' = Plural",
            formula = "The number of + Plural Noun -> SINGULAR Verb\nA number of + Plural Noun -> PLURAL Verb",
            backDesc = "'The number' refers to the numerical figure (singular); 'A number' means 'many' (plural).",
            example = "✅ The number of applicants IS increasing.\n✅ A number of applicants ARE waiting outside.",
            category = "Subject-Verb Agreement",
            bookRef = "Book 1"
        )
    )

    val bracketSentences: List<BracketSentence> = listOf(
        BracketSentence(
            id = "bracket-1",
            exam = "SSC CGL 2024 Tier 1",
            topic = "Prepositional Intervening Clutter",
            rawSentence = "The quality of these newly imported digital cameras from Japan are exceptional.",
            subject = "The quality (Singular)",
            verb = "is (was incorrectly written as 'are')",
            prepositionalPhrases = listOf("[of these newly imported digital cameras]", "[from Japan]"),
            trapNoun = "digital cameras (plural, trapped candidate to use 'are')",
            bracketedSentence = "The quality [of these newly imported digital cameras] [from Japan] is exceptional.",
            isCorrectSentence = false,
            correctionIfWrong = "Change 'are' to 'is'.",
            ruleExplanation = "Bracket out both prepositional phrases: '[of these cameras]' and '[from Japan]'. The remaining core clause is 'The quality ... is exceptional'. 'Quality' is uncountable/singular."
        ),
        BracketSentence(
            id = "bracket-2",
            exam = "IBPS PO 2024 Mains",
            topic = "Parenthetical As Well As Phrase",
            rawSentence = "The Chief Financial Officer as well as the senior auditors has submitted the compliance report.",
            subject = "The Chief Financial Officer (Singular)",
            verb = "has submitted (Correct)",
            prepositionalPhrases = listOf("[as well as the senior auditors]"),
            trapNoun = "senior auditors (plural)",
            bracketedSentence = "The Chief Financial Officer [as well as the senior auditors] has submitted the compliance report.",
            isCorrectSentence = true,
            correctionIfWrong = "Sentence is already correct.",
            ruleExplanation = "Phrases joined by 'as well as', 'along with', 'together with', 'in addition to' are parenthetical brackets. The verb agrees strictly with the primary subject 'The Chief Financial Officer'."
        ),
        BracketSentence(
            id = "bracket-3",
            exam = "UPSC CDS 2023",
            topic = "Inverted Directional Syntax",
            rawSentence = "Down the steep winding slope of the Nilgiri hills rolls the heavy logging trucks.",
            subject = "the heavy logging trucks (Plural)",
            verb = "roll (incorrectly written as 'rolls')",
            prepositionalPhrases = listOf("[Down the steep winding slope]", "[of the Nilgiri hills]"),
            trapNoun = "slope / hills",
            bracketedSentence = "[Down the steep winding slope] [of the Nilgiri hills] roll the heavy logging trucks.",
            isCorrectSentence = false,
            correctionIfWrong = "Change 'rolls' to 'roll'.",
            ruleExplanation = "When sentences start with adverbial direction ('Down the slope'), the real subject is inverted after the verb: 'the heavy logging trucks' (plural) -> requires plural verb 'roll'."
        ),
        BracketSentence(
            id = "bracket-4",
            exam = "State PSC / MPSC 2024",
            topic = "Relative Clause Subject Lock",
            rawSentence = "She is one of those dedicated scientists who has contributed immensely to renewable energy.",
            subject = "those dedicated scientists (Plural antecedent of 'who')",
            verb = "have contributed (incorrectly written as 'has')",
            prepositionalPhrases = listOf("[of those dedicated scientists who have contributed immensely to renewable energy]"),
            trapNoun = "She / one",
            bracketedSentence = "She is one [of those dedicated scientists who have contributed immensely to renewable energy].",
            isCorrectSentence = false,
            correctionIfWrong = "Change 'has contributed' to 'have contributed'.",
            ruleExplanation = "In 'one of the + plural noun + who/that', the relative pronoun refers to the plural antecedent ('scientists'), requiring plural 'have contributed'. Exception: 'the only one of...' takes singular."
        ),
        BracketSentence(
            id = "bracket-5",
            exam = "SSC CHSL 2024",
            topic = "Distributive Pronoun Each/Every",
            rawSentence = "Each of the participants in the national debate tournament were given a memento.",
            subject = "Each (Singular distributive)",
            verb = "was given (incorrectly written as 'were given')",
            prepositionalPhrases = listOf("[of the participants]", "[in the national debate tournament]"),
            trapNoun = "participants (plural)",
            bracketedSentence = "Each [of the participants] [in the national debate tournament] was given a memento.",
            isCorrectSentence = false,
            correctionIfWrong = "Change 'were given' to 'was given'.",
            ruleExplanation = "Bracket out '[of the participants]' and '[in the national debate tournament]'. 'Each' is grammatically singular and takes 'was'."
        )
    )

    val testimonials: List<Testimonial> = listOf(
        Testimonial(
            name = "Aditya Sharma",
            rank = "SSC CGL AIR 42 (Income Tax Inspector)",
            exam = "SSC CGL",
            avatarInitials = "AS",
            quote = "The Bracket Method completely rewired how I read error spotting. I scored 135/135 in English Tier 2 without guessing a single question by sound.",
            score = "135/135 Tier 2"
        ),
        Testimonial(
            name = "Pooja Deshmukh",
            rank = "IBPS PO (Probationary Officer, SBI)",
            exam = "IBPS PO",
            avatarInitials = "PD",
            quote = "The 16-book series covers exact grammar traps that Indian coaching institutes usually rush through. Third conditionals and inversion formulas are gold.",
            score = "28.75/30 English"
        ),
        Testimonial(
            name = "Col. Vikram Rathore",
            rank = "UPSC CDS English Cleared (Air Force Academy)",
            exam = "UPSC CDS",
            avatarInitials = "VR",
            quote = "Clear, mathematical formulas without linguistic fluff. The mnemonic flashcards made revision during mock tests super fast.",
            score = "84/100 CDS"
        )
    )

    val examTargets: List<ExamTarget> = listOf(
        ExamTarget(
            name = "SSC CGL 2026",
            shortCode = "SSC CGL",
            daysRemaining = 84,
            totalSyllabusRules = 120,
            masteredRules = 78,
            targetYear = "2026"
        ),
        ExamTarget(
            name = "IBPS PO 2026",
            shortCode = "IBPS PO",
            daysRemaining = 112,
            totalSyllabusRules = 95,
            masteredRules = 62,
            targetYear = "2026"
        ),
        ExamTarget(
            name = "UPSC CDS (II) 2026",
            shortCode = "UPSC CDS",
            daysRemaining = 65,
            totalSyllabusRules = 110,
            masteredRules = 88,
            targetYear = "2026"
        ),
        ExamTarget(
            name = "State PSC / MPSC 2026",
            shortCode = "State PSC",
            daysRemaining = 140,
            totalSyllabusRules = 85,
            masteredRules = 45,
            targetYear = "2026"
        )
    )
}

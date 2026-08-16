package com.example.data

data class Book(
    val id: String,
    val title: String,
    val subtitle: String,
    val series: String,
    val category: String,
    val topic: String,
    val exams: List<String>,
    val price: String,
    val originalPrice: String,
    val rating: Double,
    val reviews: Int,
    val badge: String,
    val amazonUrl: String,
    val description: String,
    val features: List<String>,
    val accentColorHex: String = "#F5A623",
    val sampleRules: List<RuleSnippet> = emptyList()
)

data class RuleSnippet(
    val ruleTitle: String,
    val formula: String,
    val wrong: String,
    val correct: String,
    val explanation: String
)

data class Lesson(
    val id: String,
    val slug: String,
    val title: String,
    val excerpt: String,
    val category: String,
    val tags: List<String>,
    val readingTime: String,
    val author: String = "ZeroErrorEnglish Editorial Team",
    val publishDate: String,
    val featured: Boolean = false,
    val relatedBookId: String? = null,
    val sections: List<LessonSection>
)

data class LessonSection(
    val heading: String,
    val body: String,
    val wrongExample: String? = null,
    val correctExample: String? = null,
    val note: String? = null,
    val bracketBreakdown: String? = null
)

data class QuizQuestion(
    val id: Int,
    val exam: String,
    val topic: String,
    val sentence: String,
    val options: List<QuizOption>,
    val explanation: String,
    val bracketAnalysis: String? = null
)

data class QuizOption(
    val text: String,
    val isCorrect: Boolean
)

data class MnemonicCard(
    val id: Int,
    val ruleNumber: String,
    val keyword: String,
    val frontDesc: String,
    val title: String,
    val formula: String,
    val backDesc: String,
    val example: String,
    val category: String,
    val bookRef: String = "Book 1"
)

data class BracketSentence(
    val id: String,
    val exam: String,
    val topic: String,
    val rawSentence: String,
    val subject: String,
    val verb: String,
    val prepositionalPhrases: List<String>,
    val trapNoun: String,
    val bracketedSentence: String,
    val isCorrectSentence: Boolean,
    val correctionIfWrong: String,
    val ruleExplanation: String
)

data class Testimonial(
    val name: String,
    val rank: String,
    val exam: String,
    val avatarInitials: String,
    val quote: String,
    val score: String
)

data class ExamTarget(
    val name: String,
    val shortCode: String,
    val daysRemaining: Int,
    val totalSyllabusRules: Int,
    val masteredRules: Int,
    val targetYear: String = "2026"
)


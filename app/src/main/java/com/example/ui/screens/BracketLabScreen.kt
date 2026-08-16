package com.example.ui.screens

import androidx.compose.animation.AnimatedVisibility
import androidx.compose.animation.fadeIn
import androidx.compose.animation.slideInVertically
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.lazy.itemsIndexed
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.ArrowBack
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextDecoration
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.data.BracketSentence
import com.example.data.ZeroErrorDataRepository
import com.example.ui.components.ExamTag
import com.example.ui.components.SectionHeader
import com.example.ui.theme.*

@Composable
fun BracketLabScreen(
    onClose: (() -> Unit)? = null,
    modifier: Modifier = Modifier
) {
    val sentences = remember { ZeroErrorDataRepository.bracketSentences }
    var selectedSentenceIndex by remember { mutableIntStateOf(0) }
    var stepState by remember { mutableIntStateOf(0) } // 0: Raw, 1: Bracketed, 2: Subject/Verb Highlighted, 3: Full Diagnostic
    var customSentenceInput by remember { mutableStateOf("") }
    var showCustomInput by remember { mutableStateOf(false) }

    val currentSentence = sentences[selectedSentenceIndex % sentences.size]

    LazyColumn(
        modifier = modifier.fillMaxSize(),
        contentPadding = PaddingValues(bottom = 90.dp, top = 8.dp),
        verticalArrangement = Arrangement.spacedBy(18.dp)
    ) {
        // Back Navigation Button if modal
        if (onClose != null) {
            item {
                Row(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(horizontal = 16.dp),
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    IconButton(onClick = onClose) {
                        Icon(
                            imageVector = Icons.AutoMirrored.Filled.ArrowBack,
                            contentDescription = "Back to Home",
                            tint = MaterialTheme.colorScheme.onSurface
                        )
                    }
                    Spacer(modifier = Modifier.width(4.dp))
                    Text(
                        text = "Back to Dashboard",
                        style = MaterialTheme.typography.labelMedium.copy(
                            fontWeight = FontWeight.SemiBold,
                            color = MaterialTheme.colorScheme.onSurfaceVariant
                        )
                    )
                }
            }
        }

        // Header
        item {
            Column(modifier = Modifier.padding(horizontal = 16.dp)) {
                Surface(
                    color = GoldAccent.copy(alpha = 0.15f),
                    shape = RoundedCornerShape(20.dp),
                    border = androidx.compose.foundation.BorderStroke(1.dp, GoldAccent.copy(alpha = 0.4f))
                ) {
                    Row(
                        modifier = Modifier.padding(horizontal = 10.dp, vertical = 4.dp),
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        Text(
                            text = "🔬 INTERACTIVE GRAMMAR WORKBENCH",
                            style = MaterialTheme.typography.labelSmall.copy(
                                fontWeight = FontWeight.Bold,
                                color = GoldAccent,
                                fontSize = 10.sp,
                                letterSpacing = 0.5.sp
                            )
                        )
                    }
                }

                Spacer(modifier = Modifier.height(8.dp))

                Text(
                    text = "Bracket Elimination Lab",
                    style = MaterialTheme.typography.headlineSmall.copy(
                        fontWeight = FontWeight.Bold
                    )
                )
                Spacer(modifier = Modifier.height(4.dp))
                Text(
                    text = "Isolate prepositional phrases with brackets [ ] to uncover the true subject and eliminate errors instantly.",
                    style = MaterialTheme.typography.bodyMedium.copy(
                        color = MaterialTheme.colorScheme.onSurfaceVariant
                    )
                )

                Spacer(modifier = Modifier.height(14.dp))

                // Sentence Selector Carousel
                Text(
                    text = "Select Exam Trap Sentence:",
                    style = MaterialTheme.typography.labelMedium.copy(
                        fontWeight = FontWeight.SemiBold,
                        color = MaterialTheme.colorScheme.onSurface
                    )
                )
                Spacer(modifier = Modifier.height(6.dp))

                LazyRow(
                    horizontalArrangement = Arrangement.spacedBy(8.dp)
                ) {
                    itemsIndexed(sentences) { index, sentence ->
                        val isSelected = selectedSentenceIndex == index
                        FilterChip(
                            selected = isSelected,
                            onClick = {
                                selectedSentenceIndex = index
                                stepState = 0
                            },
                            label = { Text("Trap #${index + 1}: ${sentence.topic.take(18)}...") },
                            colors = FilterChipDefaults.filterChipColors(
                                selectedContainerColor = MaterialTheme.colorScheme.primary,
                                selectedLabelColor = MaterialTheme.colorScheme.onPrimary
                            )
                        )
                    }
                }
            }
        }

        // Workbench Interactive Card
        item {
            Card(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(horizontal = 16.dp),
                shape = RoundedCornerShape(20.dp),
                colors = CardDefaults.cardColors(
                    containerColor = NavyDark
                ),
                elevation = CardDefaults.cardElevation(defaultElevation = 4.dp),
                border = androidx.compose.foundation.BorderStroke(1.dp, GoldAccent.copy(alpha = 0.5f))
            ) {
                Column(modifier = Modifier.padding(18.dp)) {
                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        horizontalArrangement = Arrangement.SpaceBetween,
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        ExamTag(examName = currentSentence.exam)
                        Surface(
                            color = Color.White.copy(alpha = 0.1f),
                            shape = RoundedCornerShape(12.dp)
                        ) {
                            Text(
                                text = "Step ${stepState + 1} of 4",
                                style = MaterialTheme.typography.labelSmall.copy(
                                    color = GoldLight,
                                    fontWeight = FontWeight.Bold
                                ),
                                modifier = Modifier.padding(horizontal = 8.dp, vertical = 3.dp)
                            )
                        }
                    }

                    Spacer(modifier = Modifier.height(14.dp))

                    Text(
                        text = currentSentence.topic,
                        style = MaterialTheme.typography.labelMedium.copy(
                            color = GoldAccent,
                            fontWeight = FontWeight.Bold
                        )
                    )

                    Spacer(modifier = Modifier.height(8.dp))

                    // Sentence Box with dynamic styling based on stepState
                    Surface(
                        modifier = Modifier.fillMaxWidth(),
                        color = Color.White.copy(alpha = 0.08f),
                        shape = RoundedCornerShape(12.dp),
                        border = androidx.compose.foundation.BorderStroke(1.dp, Color.White.copy(alpha = 0.15f))
                    ) {
                        Column(modifier = Modifier.padding(14.dp)) {
                            when (stepState) {
                                0 -> {
                                    Text(
                                        text = currentSentence.rawSentence,
                                        style = MaterialTheme.typography.bodyLarge.copy(
                                            color = Color.White,
                                            fontWeight = FontWeight.Medium,
                                            lineHeight = 24.sp
                                        )
                                    )
                                    Spacer(modifier = Modifier.height(8.dp))
                                    Text(
                                        text = "👀 Notice how your brain might be tricked by nouns right before the verb.",
                                        style = MaterialTheme.typography.labelSmall.copy(
                                            color = Color.White.copy(alpha = 0.7f)
                                        )
                                    )
                                }
                                1 -> {
                                    Text(
                                        text = currentSentence.bracketedSentence,
                                        style = MaterialTheme.typography.bodyLarge.copy(
                                            color = GoldLight,
                                            fontWeight = FontWeight.SemiBold,
                                            lineHeight = 24.sp
                                        )
                                    )
                                    Spacer(modifier = Modifier.height(8.dp))
                                    Text(
                                        text = "📦 Step 1 Applied: All prepositional modifiers isolated inside brackets [ ]. Nouns in brackets CANNOT be the subject!",
                                        style = MaterialTheme.typography.labelSmall.copy(
                                            color = GoldAccent
                                        )
                                    )
                                }
                                2 -> {
                                    Column {
                                        Text(
                                            text = currentSentence.bracketedSentence,
                                            style = MaterialTheme.typography.bodyLarge.copy(
                                                color = Color.White,
                                                fontWeight = FontWeight.Medium,
                                                lineHeight = 24.sp
                                            )
                                        )
                                        Spacer(modifier = Modifier.height(10.dp))
                                        Row(
                                            modifier = Modifier.fillMaxWidth(),
                                            horizontalArrangement = Arrangement.spacedBy(8.dp)
                                        ) {
                                            Surface(
                                                color = Color(0xFF0284C7).copy(alpha = 0.3f),
                                                shape = RoundedCornerShape(6.dp),
                                                border = androidx.compose.foundation.BorderStroke(1.dp, Color(0xFF38BDF8))
                                            ) {
                                                Text(
                                                    text = "👤 Subject: ${currentSentence.subject}",
                                                    style = MaterialTheme.typography.labelSmall.copy(
                                                        color = Color(0xFFE0F2FE),
                                                        fontWeight = FontWeight.Bold
                                                    ),
                                                    modifier = Modifier.padding(horizontal = 8.dp, vertical = 4.dp)
                                                )
                                            }

                                            Surface(
                                                color = SuccessGreen.copy(alpha = 0.25f),
                                                shape = RoundedCornerShape(6.dp),
                                                border = androidx.compose.foundation.BorderStroke(1.dp, SuccessGreen)
                                            ) {
                                                Text(
                                                    text = "⚡ Verb: ${currentSentence.verb}",
                                                    style = MaterialTheme.typography.labelSmall.copy(
                                                        color = SuccessGreenContainer,
                                                        fontWeight = FontWeight.Bold
                                                    ),
                                                    modifier = Modifier.padding(horizontal = 8.dp, vertical = 4.dp)
                                                )
                                            }
                                        }
                                    }
                                }
                                3 -> {
                                    Column {
                                        Text(
                                            text = if (currentSentence.isCorrectSentence)
                                                "✅ Correct: ${currentSentence.bracketedSentence}"
                                            else
                                                "❌ Incorrect: ${currentSentence.rawSentence}\n✅ Correct: ${currentSentence.bracketedSentence}",
                                            style = MaterialTheme.typography.bodyMedium.copy(
                                                color = Color.White,
                                                lineHeight = 22.sp
                                            )
                                        )
                                        Spacer(modifier = Modifier.height(8.dp))
                                        Surface(
                                            color = ErrorRedContainer.copy(alpha = 0.2f),
                                            shape = RoundedCornerShape(6.dp),
                                            border = androidx.compose.foundation.BorderStroke(1.dp, ErrorRed.copy(alpha = 0.5f))
                                        ) {
                                            Text(
                                                text = "🪤 Exam Trap: ${currentSentence.trapNoun}",
                                                style = MaterialTheme.typography.labelSmall.copy(
                                                    color = Color(0xFFFCA5A5),
                                                    fontWeight = FontWeight.Medium
                                                ),
                                                modifier = Modifier.padding(horizontal = 8.dp, vertical = 4.dp)
                                            )
                                        }
                                    }
                                }
                            }
                        }
                    }

                    Spacer(modifier = Modifier.height(16.dp))

                    // Step Control Buttons
                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        horizontalArrangement = Arrangement.spacedBy(8.dp)
                    ) {
                        Button(
                            onClick = {
                                stepState = (stepState + 1) % 4
                            },
                            modifier = Modifier.weight(1f),
                            colors = ButtonDefaults.buttonColors(containerColor = GoldAccent),
                            shape = RoundedCornerShape(10.dp)
                        ) {
                            Text(
                                text = when (stepState) {
                                    0 -> "Step 1: Put Brackets [ ]"
                                    1 -> "Step 2: Isolate Subject & Verb"
                                    2 -> "Step 3: Test Agreement"
                                    else -> "Reset / Next Cycle 🔄"
                                },
                                style = MaterialTheme.typography.labelMedium.copy(
                                    fontWeight = FontWeight.Bold,
                                    color = NavyDark
                                )
                            )
                        }

                        IconButton(
                            onClick = {
                                stepState = 0
                                selectedSentenceIndex = (selectedSentenceIndex + 1) % sentences.size
                            },
                            modifier = Modifier
                                .clip(RoundedCornerShape(10.dp))
                                .background(Color.White.copy(alpha = 0.12f))
                        ) {
                            Icon(
                                imageVector = Icons.Default.ArrowForward,
                                contentDescription = "Next Trap",
                                tint = GoldAccent
                            )
                        }
                    }
                }
            }
        }

        // Mentor Breakdown Explanation
        item {
            Card(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(horizontal = 16.dp),
                shape = RoundedCornerShape(16.dp),
                colors = CardDefaults.cardColors(
                    containerColor = MaterialTheme.colorScheme.surface
                ),
                elevation = CardDefaults.cardElevation(defaultElevation = 2.dp),
                border = androidx.compose.foundation.BorderStroke(1.dp, MaterialTheme.colorScheme.outline.copy(alpha = 0.5f))
            ) {
                Column(modifier = Modifier.padding(16.dp)) {
                    Text(
                        text = "📖 22-Year Pedagogy Diagnostic Analysis",
                        style = MaterialTheme.typography.titleSmall.copy(
                            fontWeight = FontWeight.Bold,
                            color = MaterialTheme.colorScheme.primary
                        )
                    )
                    Spacer(modifier = Modifier.height(8.dp))
                    Text(
                        text = currentSentence.ruleExplanation,
                        style = MaterialTheme.typography.bodyMedium.copy(
                            color = MaterialTheme.colorScheme.onSurface,
                            lineHeight = 22.sp
                        )
                    )

                    Spacer(modifier = Modifier.height(12.dp))

                    Text(
                        text = "Prepositional Phrases in this sentence:",
                        style = MaterialTheme.typography.labelSmall.copy(
                            fontWeight = FontWeight.Bold,
                            color = MaterialTheme.colorScheme.onSurfaceVariant
                        )
                    )
                    Spacer(modifier = Modifier.height(4.dp))
                    currentSentence.prepositionalPhrases.forEach { phrase ->
                        Row(
                            modifier = Modifier.padding(vertical = 2.dp),
                            verticalAlignment = Alignment.CenterVertically
                        ) {
                            Text(text = "•", color = GoldAccent, modifier = Modifier.padding(end = 6.dp))
                            Text(
                                text = phrase,
                                style = MaterialTheme.typography.bodySmall.copy(
                                    fontWeight = FontWeight.SemiBold,
                                    color = MaterialTheme.colorScheme.primary
                                )
                            )
                        }
                    }
                }
            }
        }

        // 5-Step Bracket Algorithm Guide
        item {
            Column(modifier = Modifier.padding(horizontal = 16.dp)) {
                SectionHeader(
                    tag = "Algorithm Blueprint",
                    title = "The 5-Step Universal Protocol"
                )

                Spacer(modifier = Modifier.height(10.dp))

                val algorithmSteps = listOf(
                    "1. Prepositional Phrases" to "Isolate with [ ] (in, on, at, by, with, of, for, from). Nouns inside brackets NEVER control the verb.",
                    "2. Parenthetical Connectors" to "Bracket phrases like (as well as, together with, in addition to, along with). Subject #1 rules the verb.",
                    "3. Relative Clauses" to "In 'one of the + plural noun + who/that', bracket the modifier and link relative pronoun to the plural noun.",
                    "4. Inverted Sentence Start" to "When directional adverbs lead (Down the road, Along the border), look for the subject AFTER the verb.",
                    "5. Correlative Balancers" to "Lock in exact pairs (Not only... but also, Scarcely... when, No sooner... than, Lest... should)."
                )

                algorithmSteps.forEachIndexed { idx, (title, detail) ->
                    Card(
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(vertical = 4.dp),
                        shape = RoundedCornerShape(12.dp),
                        colors = CardDefaults.cardColors(
                            containerColor = MaterialTheme.colorScheme.surfaceVariant.copy(alpha = 0.5f)
                        ),
                        border = androidx.compose.foundation.BorderStroke(0.5.dp, MaterialTheme.colorScheme.outline.copy(alpha = 0.4f))
                    ) {
                        Row(
                            modifier = Modifier.padding(12.dp),
                            verticalAlignment = Alignment.Top
                        ) {
                            Box(
                                modifier = Modifier
                                    .size(24.dp)
                                    .clip(CircleShape)
                                    .background(MaterialTheme.colorScheme.primary),
                                contentAlignment = Alignment.Center
                            ) {
                                Text(
                                    text = "${idx + 1}",
                                    style = MaterialTheme.typography.labelSmall.copy(
                                        color = Color.White,
                                        fontWeight = FontWeight.Bold,
                                        fontSize = 11.sp
                                    )
                                )
                            }
                            Spacer(modifier = Modifier.width(10.dp))
                            Column {
                                Text(
                                    text = title,
                                    style = MaterialTheme.typography.titleSmall.copy(
                                        fontWeight = FontWeight.Bold,
                                        fontSize = 13.sp
                                    )
                                )
                                Spacer(modifier = Modifier.height(2.dp))
                                Text(
                                    text = detail,
                                    style = MaterialTheme.typography.bodySmall.copy(
                                        color = MaterialTheme.colorScheme.onSurfaceVariant,
                                        lineHeight = 18.sp
                                    )
                                )
                            }
                        }
                    }
                }
            }
        }
    }
}

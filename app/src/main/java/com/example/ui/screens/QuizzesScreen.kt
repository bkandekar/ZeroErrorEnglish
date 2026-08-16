package com.example.ui.screens

import androidx.compose.animation.AnimatedVisibility
import androidx.compose.animation.fadeIn
import androidx.compose.animation.slideInVertically
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.lazy.itemsIndexed
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.data.QuizQuestion
import com.example.data.ZeroErrorDataRepository
import com.example.ui.components.ExamTag
import com.example.ui.theme.*

@Composable
fun QuizzesScreen(
    modifier: Modifier = Modifier
) {
    val allQuestions = remember { ZeroErrorDataRepository.quizQuestions }
    var selectedExamFilter by remember { mutableStateOf("All") }
    var currentIndex by remember { mutableIntStateOf(0) }
    var selectedOptionIndex by remember { mutableStateOf<Int?>(null) }
    var score by remember { mutableIntStateOf(0) }
    var answeredCount by remember { mutableIntStateOf(0) }
    var currentStreak by remember { mutableIntStateOf(0) }
    var bestStreak by remember { mutableIntStateOf(0) }

    val examFilters = listOf("All", "SSC CGL", "IBPS PO", "UPSC CDS", "State PSC", "SSC CHSL")

    val filteredQuestions = remember(selectedExamFilter) {
        if (selectedExamFilter == "All") allQuestions
        else allQuestions.filter { it.exam.contains(selectedExamFilter, ignoreCase = true) }
    }

    val currentQuestion = filteredQuestions.getOrNull(currentIndex % filteredQuestions.size.coerceAtLeast(1))
    val accuracy = if (answeredCount > 0) (score * 100) / answeredCount else 0

    LazyColumn(
        modifier = modifier.fillMaxSize(),
        contentPadding = PaddingValues(bottom = 90.dp),
        verticalArrangement = Arrangement.spacedBy(16.dp)
    ) {
        // Header & Score Tracker
        item {
            Column(modifier = Modifier.padding(horizontal = 16.dp, vertical = 8.dp)) {
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.SpaceBetween,
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Column {
                        Text(
                            text = "Error-Spotting Simulator",
                            style = MaterialTheme.typography.headlineSmall.copy(
                                fontWeight = FontWeight.Bold
                            )
                        )
                        Text(
                            text = "Test your grammar instincts against real exam traps.",
                            style = MaterialTheme.typography.bodyMedium.copy(
                                color = MaterialTheme.colorScheme.onSurfaceVariant
                            )
                        )
                    }

                    Surface(
                        color = NavyDark,
                        shape = RoundedCornerShape(12.dp),
                        border = androidx.compose.foundation.BorderStroke(1.dp, GoldAccent.copy(alpha = 0.5f))
                    ) {
                        Row(
                            modifier = Modifier.padding(horizontal = 12.dp, vertical = 8.dp),
                            verticalAlignment = Alignment.CenterVertically,
                            horizontalArrangement = Arrangement.spacedBy(8.dp)
                        ) {
                            Column(horizontalAlignment = Alignment.CenterHorizontally) {
                                Text(
                                    text = "Score",
                                    style = MaterialTheme.typography.labelSmall.copy(
                                        color = GoldLight,
                                        fontSize = 10.sp
                                    )
                                )
                                Text(
                                    text = "$score/$answeredCount",
                                    style = MaterialTheme.typography.titleMedium.copy(
                                        fontWeight = FontWeight.ExtraBold,
                                        color = GoldAccent
                                    )
                                )
                            }

                            VerticalDivider(
                                modifier = Modifier.height(24.dp),
                                color = GoldAccent.copy(alpha = 0.3f)
                            )

                            Column(horizontalAlignment = Alignment.CenterHorizontally) {
                                Text(
                                    text = "Streak",
                                    style = MaterialTheme.typography.labelSmall.copy(
                                        color = GoldLight,
                                        fontSize = 10.sp
                                    )
                                )
                                Text(
                                    text = "🔥 $currentStreak",
                                    style = MaterialTheme.typography.titleMedium.copy(
                                        fontWeight = FontWeight.ExtraBold,
                                        color = Color(0xFFF97316)
                                    )
                                )
                            }
                        }
                    }
                }

                Spacer(modifier = Modifier.height(12.dp))

                // Progress Bar
                LinearProgressIndicator(
                    progress = { if (filteredQuestions.isNotEmpty()) (currentIndex + 1).toFloat() / filteredQuestions.size else 0f },
                    modifier = Modifier
                        .fillMaxWidth()
                        .height(6.dp)
                        .clip(RoundedCornerShape(3.dp)),
                    color = GoldAccent,
                    trackColor = MaterialTheme.colorScheme.surfaceVariant
                )

                Spacer(modifier = Modifier.height(6.dp))

                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.SpaceBetween
                ) {
                    Text(
                        text = "Question ${currentIndex + 1} of ${filteredQuestions.size}",
                        style = MaterialTheme.typography.labelSmall.copy(
                            color = MaterialTheme.colorScheme.onSurfaceVariant,
                            fontWeight = FontWeight.SemiBold
                        )
                    )
                    Text(
                        text = "Accuracy: $accuracy%",
                        style = MaterialTheme.typography.labelSmall.copy(
                            color = if (accuracy >= 80) SuccessGreen else if (accuracy >= 50) GoldAccent else MaterialTheme.colorScheme.onSurfaceVariant,
                            fontWeight = FontWeight.Bold
                        )
                    )
                }

                Spacer(modifier = Modifier.height(10.dp))

                // Filters
                LazyRow(
                    horizontalArrangement = Arrangement.spacedBy(8.dp)
                ) {
                    items(examFilters) { exam ->
                        FilterChip(
                            selected = selectedExamFilter == exam,
                            onClick = {
                                selectedExamFilter = exam
                                currentIndex = 0
                                selectedOptionIndex = null
                            },
                            label = { Text(exam) },
                            colors = FilterChipDefaults.filterChipColors(
                                selectedContainerColor = MaterialTheme.colorScheme.primary,
                                selectedLabelColor = MaterialTheme.colorScheme.onPrimary
                            )
                        )
                    }
                }
            }
        }

        if (currentQuestion == null) {
            item {
                Box(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(vertical = 40.dp),
                    contentAlignment = Alignment.Center
                ) {
                    Text("No questions found for this exam category.")
                }
            }
        } else {
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
                    Column(modifier = Modifier.padding(18.dp)) {
                        Row(
                            modifier = Modifier.fillMaxWidth(),
                            horizontalArrangement = Arrangement.SpaceBetween,
                            verticalAlignment = Alignment.CenterVertically
                        ) {
                            ExamTag(examName = currentQuestion.exam)
                            Surface(
                                color = MaterialTheme.colorScheme.primaryContainer.copy(alpha = 0.6f),
                                shape = RoundedCornerShape(6.dp)
                            ) {
                                Text(
                                    text = currentQuestion.topic,
                                    style = MaterialTheme.typography.labelSmall.copy(
                                        color = GoldAccent,
                                        fontWeight = FontWeight.SemiBold
                                    ),
                                    modifier = Modifier.padding(horizontal = 8.dp, vertical = 3.dp)
                                )
                            }
                        }

                        Spacer(modifier = Modifier.height(14.dp))

                        // Question Prompt Card
                        Surface(
                            color = MaterialTheme.colorScheme.surfaceVariant.copy(alpha = 0.4f),
                            shape = RoundedCornerShape(10.dp),
                            modifier = Modifier.fillMaxWidth()
                        ) {
                            Text(
                                text = currentQuestion.sentence,
                                style = MaterialTheme.typography.titleMedium.copy(
                                    fontWeight = FontWeight.SemiBold,
                                    lineHeight = 24.sp
                                ),
                                modifier = Modifier.padding(14.dp)
                            )
                        }

                        Spacer(modifier = Modifier.height(16.dp))

                        val optionLabels = listOf("A", "B", "C", "D", "E")

                        currentQuestion.options.forEachIndexed { index, option ->
                            val isSelected = selectedOptionIndex == index
                            val showResult = selectedOptionIndex != null

                            val backgroundColor = when {
                                !showResult -> MaterialTheme.colorScheme.surfaceVariant.copy(alpha = 0.5f)
                                option.isCorrect -> SuccessGreenContainer
                                isSelected && !option.isCorrect -> ErrorRedContainer
                                else -> MaterialTheme.colorScheme.surfaceVariant.copy(alpha = 0.3f)
                            }

                            val textColor = when {
                                !showResult -> MaterialTheme.colorScheme.onSurface
                                option.isCorrect -> Color(0xFF065F46)
                                isSelected && !option.isCorrect -> Color(0xFF991B1B)
                                else -> MaterialTheme.colorScheme.onSurfaceVariant
                            }

                            Surface(
                                modifier = Modifier
                                    .fillMaxWidth()
                                    .padding(vertical = 5.dp)
                                    .clip(RoundedCornerShape(12.dp))
                                    .clickable(enabled = selectedOptionIndex == null) {
                                        selectedOptionIndex = index
                                        answeredCount++
                                        if (option.isCorrect) {
                                            score++
                                            currentStreak++
                                            if (currentStreak > bestStreak) bestStreak = currentStreak
                                        } else {
                                            currentStreak = 0
                                        }
                                    },
                                color = backgroundColor,
                                border = androidx.compose.foundation.BorderStroke(
                                    if (isSelected || (showResult && option.isCorrect)) 1.5.dp else 1.dp,
                                    if (showResult && option.isCorrect) SuccessGreen
                                    else if (isSelected && !option.isCorrect) ErrorRed
                                    else if (isSelected) MaterialTheme.colorScheme.primary
                                    else MaterialTheme.colorScheme.outline.copy(alpha = 0.3f)
                                )
                            ) {
                                Row(
                                    modifier = Modifier.padding(horizontal = 14.dp, vertical = 12.dp),
                                    verticalAlignment = Alignment.CenterVertically
                                ) {
                                    // Option Letter Badge (A, B, C, D)
                                    Box(
                                        modifier = Modifier
                                            .size(28.dp)
                                            .background(
                                                color = if (showResult && option.isCorrect) SuccessGreen
                                                else if (isSelected && !option.isCorrect) ErrorRed
                                                else MaterialTheme.colorScheme.primaryContainer,
                                                shape = CircleShape
                                            ),
                                        contentAlignment = Alignment.Center
                                    ) {
                                        Text(
                                            text = optionLabels.getOrElse(index) { "${index + 1}" },
                                            style = MaterialTheme.typography.labelSmall.copy(
                                                fontWeight = FontWeight.Bold,
                                                color = if (showResult && (option.isCorrect || isSelected)) Color.White else MaterialTheme.colorScheme.onPrimaryContainer
                                            )
                                        )
                                    }

                                    Spacer(modifier = Modifier.width(12.dp))

                                    Text(
                                        text = option.text,
                                        style = MaterialTheme.typography.bodyMedium.copy(
                                            fontWeight = if (isSelected || (showResult && option.isCorrect)) FontWeight.Bold else FontWeight.Normal,
                                            color = textColor
                                        ),
                                        modifier = Modifier.weight(1f)
                                    )

                                    if (showResult) {
                                        if (option.isCorrect) {
                                            Icon(
                                                imageVector = Icons.Default.CheckCircle,
                                                contentDescription = "Correct",
                                                tint = SuccessGreen,
                                                modifier = Modifier.size(22.dp)
                                            )
                                        } else if (isSelected) {
                                            Icon(
                                                imageVector = Icons.Default.Close,
                                                contentDescription = "Wrong",
                                                tint = ErrorRed,
                                                modifier = Modifier.size(22.dp)
                                            )
                                        }
                                    }
                                }
                            }
                        }

                        // Explanation and Bracket Reveal
                        AnimatedVisibility(
                            visible = selectedOptionIndex != null,
                            enter = fadeIn() + slideInVertically()
                        ) {
                            Column(modifier = Modifier.padding(top = 16.dp)) {
                                Surface(
                                    color = MaterialTheme.colorScheme.primaryContainer.copy(alpha = 0.35f),
                                    shape = RoundedCornerShape(12.dp),
                                    border = androidx.compose.foundation.BorderStroke(1.dp, GoldAccent.copy(alpha = 0.3f))
                                ) {
                                    Column(modifier = Modifier.padding(14.dp)) {
                                        Row(
                                            modifier = Modifier.fillMaxWidth(),
                                            horizontalArrangement = Arrangement.SpaceBetween,
                                            verticalAlignment = Alignment.CenterVertically
                                        ) {
                                            Text(
                                                text = "🎯 Mentor Solution & Trap Analysis:",
                                                style = MaterialTheme.typography.titleSmall.copy(
                                                    fontWeight = FontWeight.Bold,
                                                    color = GoldAccent
                                                )
                                            )
                                        }
                                        Spacer(modifier = Modifier.height(6.dp))
                                        Text(
                                            text = currentQuestion.explanation,
                                            style = MaterialTheme.typography.bodyMedium.copy(
                                                color = MaterialTheme.colorScheme.onSurface,
                                                lineHeight = 20.sp
                                            )
                                        )

                                        if (currentQuestion.bracketAnalysis != null) {
                                            Spacer(modifier = Modifier.height(10.dp))
                                            Surface(
                                                color = NavyDark,
                                                shape = RoundedCornerShape(8.dp)
                                            ) {
                                                Column(modifier = Modifier.padding(10.dp)) {
                                                    Text(
                                                        text = "Bracket Elimination Breakdown:",
                                                        style = MaterialTheme.typography.labelSmall.copy(
                                                            color = GoldAccent,
                                                            fontWeight = FontWeight.Bold
                                                        )
                                                    )
                                                    Spacer(modifier = Modifier.height(4.dp))
                                                    Text(
                                                        text = currentQuestion.bracketAnalysis,
                                                        style = MaterialTheme.typography.bodySmall.copy(
                                                            color = Color.White,
                                                            fontWeight = FontWeight.Medium,
                                                            lineHeight = 18.sp
                                                        )
                                                    )
                                                }
                                            }
                                        }
                                    }
                                }

                                Spacer(modifier = Modifier.height(14.dp))

                                Row(
                                    modifier = Modifier.fillMaxWidth(),
                                    horizontalArrangement = Arrangement.SpaceBetween,
                                    verticalAlignment = Alignment.CenterVertically
                                ) {
                                    OutlinedButton(
                                        onClick = {
                                            selectedOptionIndex = null
                                        }
                                    ) {
                                        Icon(
                                            imageVector = Icons.Default.Refresh,
                                            contentDescription = "Retry",
                                            modifier = Modifier.size(16.dp)
                                        )
                                        Spacer(modifier = Modifier.width(6.dp))
                                        Text("Retry")
                                    }

                                    Button(
                                        onClick = {
                                            selectedOptionIndex = null
                                            currentIndex = (currentIndex + 1) % filteredQuestions.size
                                        },
                                        colors = ButtonDefaults.buttonColors(
                                            containerColor = MaterialTheme.colorScheme.primary
                                        )
                                    ) {
                                        Text("Next Question →")
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}


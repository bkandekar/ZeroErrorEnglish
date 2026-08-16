package com.example.ui.screens

import android.content.Intent
import android.net.Uri
import androidx.compose.animation.AnimatedVisibility
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
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
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.ui.theme.*

data class MentorStep(
    val title: String,
    val summary: String,
    val exampleBad: String,
    val exampleEliminated: String,
    val ruleInsight: String
)

@Composable
fun MentorScreen(
    modifier: Modifier = Modifier
) {
    val context = LocalContext.current
    var expandedStepIndex by remember { mutableStateOf<Int?>(0) }

    val mentorSteps = listOf(
        MentorStep(
            title = "Step 1: Isolate Prepositional Phrases",
            summary = "Put brackets [ ] around phrases starting with in, on, at, along, between, among. A noun inside a prepositional phrase is NEVER the subject.",
            exampleBad = "The quality [of these mangoes] are delicious. (❌ Error)",
            exampleEliminated = "The quality [of these mangoes] IS delicious. (✅ Core: The quality is)",
            ruleInsight = "Rule: Eliminate all bracketed modifiers to find the true singular/plural subject."
        ),
        MentorStep(
            title = "Step 2: Subject-Verb Agreement Check",
            summary = "Identify inverted or compound structures (Neither...nor, Either...or, as well as, along with).",
            exampleBad = "The captain along with his players were present. (❌ Error)",
            exampleEliminated = "The captain [along with his players] WAS present. (✅ Core: The captain was)",
            ruleInsight = "Rule: 'Along with / as well as' are parenthetical prepositions, not pluralizers."
        ),
        MentorStep(
            title = "Step 3: Tense & Conditional Consistency",
            summary = "Ensure time adverbials (since, ago, by the time) align with the correct tense and verify 3 conditional rules.",
            exampleBad = "If he had invited me, I would attend. (❌ Error)",
            exampleEliminated = "If he had invited me, I WOULD HAVE ATTENDED. (✅ 3rd Conditional)",
            ruleInsight = "Rule: Past Perfect (Had + V3) mandates Modal Perfect (Would + Have + V3)."
        ),
        MentorStep(
            title = "Step 4: Modifier & Participle Attachment",
            summary = "Verify that introductory V-ing / V3 participle clauses logically modify the subject immediately following the comma.",
            exampleBad = "Walking down the road, a car hit him. (❌ Dangling Participle)",
            exampleEliminated = "While HE was walking down the road, a car hit him. (✅ Correct Attachment)",
            ruleInsight = "Rule: The car cannot walk down the road; supply the logical subject."
        ),
        MentorStep(
            title = "Step 5: Conjunction & Parallelism Balance",
            summary = "Check correlative pairs (Not only... but also, Scarcely... when, Lest... should) for symmetrical grammatical weight.",
            exampleBad = "He not only lost his ticket but also his luggage. (❌ Unbalanced)",
            exampleEliminated = "He lost NOT ONLY his ticket BUT ALSO his luggage. (✅ Parallel Noun Phrases)",
            ruleInsight = "Rule: Correlative conjunctions must precede the exact same part of speech."
        )
    )

    LazyColumn(
        modifier = modifier.fillMaxSize(),
        contentPadding = PaddingValues(bottom = 90.dp),
        verticalArrangement = Arrangement.spacedBy(18.dp)
    ) {
        // Mentor Profile Card
        item {
            Card(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(horizontal = 16.dp, vertical = 8.dp),
                shape = RoundedCornerShape(20.dp),
                colors = CardDefaults.cardColors(
                    containerColor = NavyDark
                ),
                elevation = CardDefaults.cardElevation(defaultElevation = 4.dp),
                border = androidx.compose.foundation.BorderStroke(1.dp, GoldAccent.copy(alpha = 0.4f))
            ) {
                Column(
                    modifier = Modifier.padding(20.dp),
                    horizontalAlignment = Alignment.CenterHorizontally
                ) {
                    Box(
                        modifier = Modifier
                            .size(72.dp)
                            .clip(CircleShape)
                            .background(
                                Brush.linearGradient(
                                    colors = listOf(GoldAccent, GoldDark)
                                )
                            ),
                        contentAlignment = Alignment.Center
                    ) {
                        Text(
                            text = "Z",
                            style = MaterialTheme.typography.headlineLarge.copy(
                                color = NavyDark,
                                fontWeight = FontWeight.ExtraBold
                            )
                        )
                    }

                    Spacer(modifier = Modifier.height(12.dp))

                    Text(
                        text = "ZeroErrorEnglish Mentor",
                        style = MaterialTheme.typography.titleLarge.copy(
                            fontWeight = FontWeight.Bold,
                            color = Color.White
                        )
                    )

                    Text(
                        text = "22+ Years Classroom Pedagogy • 15+ Years Competitive Coaching",
                        style = MaterialTheme.typography.bodySmall.copy(
                            color = GoldLight,
                            fontWeight = FontWeight.Medium
                        )
                    )

                    Spacer(modifier = Modifier.height(16.dp))

                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        horizontalArrangement = Arrangement.SpaceEvenly
                    ) {
                        Column(horizontalAlignment = Alignment.CenterHorizontally) {
                            Text(
                                text = "16",
                                style = MaterialTheme.typography.titleLarge.copy(
                                    fontWeight = FontWeight.Bold,
                                    color = GoldAccent
                                )
                            )
                            Text(
                                text = "KDP Books",
                                style = MaterialTheme.typography.labelSmall.copy(
                                    color = Color.White.copy(alpha = 0.7f)
                                )
                            )
                        }

                        Column(horizontalAlignment = Alignment.CenterHorizontally) {
                            Text(
                                text = "50K+",
                                style = MaterialTheme.typography.titleLarge.copy(
                                    fontWeight = FontWeight.Bold,
                                    color = GoldAccent
                                )
                            )
                            Text(
                                text = "Students Mentored",
                                style = MaterialTheme.typography.labelSmall.copy(
                                    color = Color.White.copy(alpha = 0.7f)
                                )
                            )
                        }

                        Column(horizontalAlignment = Alignment.CenterHorizontally) {
                            Text(
                                text = "100%",
                                style = MaterialTheme.typography.titleLarge.copy(
                                    fontWeight = FontWeight.Bold,
                                    color = GoldAccent
                                )
                            )
                            Text(
                                text = "Rule-Driven",
                                style = MaterialTheme.typography.labelSmall.copy(
                                    color = Color.White.copy(alpha = 0.7f)
                                )
                            )
                        }
                    }
                }
            }
        }

        // The Methodology with Interactive Cards
        item {
            Column(modifier = Modifier.padding(horizontal = 16.dp)) {
                Text(
                    text = "The 5-Step Bracket Elimination Algorithm",
                    style = MaterialTheme.typography.titleMedium.copy(
                        fontWeight = FontWeight.Bold
                    )
                )
                Spacer(modifier = Modifier.height(4.dp))
                Text(
                    text = "Tap each step to view the elimination rules and live examples.",
                    style = MaterialTheme.typography.bodyMedium.copy(
                        color = MaterialTheme.colorScheme.onSurfaceVariant
                    )
                )

                Spacer(modifier = Modifier.height(12.dp))

                Column(verticalArrangement = Arrangement.spacedBy(10.dp)) {
                    mentorSteps.forEachIndexed { index, step ->
                        val isExpanded = expandedStepIndex == index
                        Card(
                            modifier = Modifier
                                .fillMaxWidth()
                                .clip(RoundedCornerShape(14.dp))
                                .clickable {
                                    expandedStepIndex = if (isExpanded) null else index
                                },
                            shape = RoundedCornerShape(14.dp),
                            colors = CardDefaults.cardColors(
                                containerColor = if (isExpanded) MaterialTheme.colorScheme.primaryContainer.copy(alpha = 0.25f) else MaterialTheme.colorScheme.surface
                            ),
                            border = androidx.compose.foundation.BorderStroke(
                                if (isExpanded) 1.5.dp else 1.dp,
                                if (isExpanded) GoldAccent else MaterialTheme.colorScheme.outline.copy(alpha = 0.4f)
                            )
                        ) {
                            Column(modifier = Modifier.padding(14.dp)) {
                                Row(
                                    verticalAlignment = Alignment.CenterVertically
                                ) {
                                    Box(
                                        modifier = Modifier
                                            .size(28.dp)
                                            .clip(CircleShape)
                                            .background(if (isExpanded) GoldAccent else MaterialTheme.colorScheme.primary),
                                        contentAlignment = Alignment.Center
                                    ) {
                                        Text(
                                            text = "${index + 1}",
                                            style = MaterialTheme.typography.labelMedium.copy(
                                                color = if (isExpanded) NavyDark else Color.White,
                                                fontWeight = FontWeight.Bold
                                            )
                                        )
                                    }
                                    Spacer(modifier = Modifier.width(12.dp))
                                    Text(
                                        text = step.title,
                                        style = MaterialTheme.typography.titleSmall.copy(
                                            fontWeight = FontWeight.Bold
                                        ),
                                        modifier = Modifier.weight(1f)
                                    )
                                    Icon(
                                        imageVector = if (isExpanded) Icons.Default.ExpandLess else Icons.Default.ExpandMore,
                                        contentDescription = "Expand",
                                        tint = MaterialTheme.colorScheme.onSurfaceVariant
                                    )
                                }

                                Spacer(modifier = Modifier.height(6.dp))
                                Text(
                                    text = step.summary,
                                    style = MaterialTheme.typography.bodySmall.copy(
                                        color = MaterialTheme.colorScheme.onSurfaceVariant,
                                        lineHeight = 18.sp
                                    )
                                )

                                AnimatedVisibility(visible = isExpanded) {
                                    Column(modifier = Modifier.padding(top = 12.dp)) {
                                        Surface(
                                            color = NavyDark,
                                            shape = RoundedCornerShape(10.dp),
                                            modifier = Modifier.fillMaxWidth()
                                        ) {
                                            Column(modifier = Modifier.padding(12.dp)) {
                                                Text(
                                                    text = "Common Trap Example:",
                                                    style = MaterialTheme.typography.labelSmall.copy(
                                                        color = Color(0xFFEF4444),
                                                        fontWeight = FontWeight.Bold
                                                    )
                                                )
                                                Text(
                                                    text = step.exampleBad,
                                                    style = MaterialTheme.typography.bodySmall.copy(
                                                        color = Color(0xFFFCA5A5)
                                                    )
                                                )

                                                Spacer(modifier = Modifier.height(8.dp))

                                                Text(
                                                    text = "Eliminated Correction:",
                                                    style = MaterialTheme.typography.labelSmall.copy(
                                                        color = SuccessGreen,
                                                        fontWeight = FontWeight.Bold
                                                    )
                                                )
                                                Text(
                                                    text = step.exampleEliminated,
                                                    style = MaterialTheme.typography.bodySmall.copy(
                                                        color = Color(0xFF86EFAC),
                                                        fontWeight = FontWeight.SemiBold
                                                    )
                                                )

                                                Spacer(modifier = Modifier.height(8.dp))

                                                Text(
                                                    text = step.ruleInsight,
                                                    style = MaterialTheme.typography.labelSmall.copy(
                                                        color = GoldAccent,
                                                        fontWeight = FontWeight.Medium
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
            }
        }

        // Official Channels
        item {
            Column(modifier = Modifier.padding(horizontal = 16.dp)) {
                Text(
                    text = "Official Communities & Channels",
                    style = MaterialTheme.typography.titleMedium.copy(
                        fontWeight = FontWeight.Bold
                    )
                )

                Spacer(modifier = Modifier.height(10.dp))

                Button(
                    onClick = {
                        val intent = Intent(Intent.ACTION_VIEW, Uri.parse("https://t.me/ZeroErrorEnglish"))
                        context.startActivity(intent)
                    },
                    modifier = Modifier.fillMaxWidth(),
                    shape = RoundedCornerShape(12.dp),
                    colors = ButtonDefaults.buttonColors(containerColor = GoldAccent)
                ) {
                    Icon(
                        imageVector = Icons.Default.Send,
                        contentDescription = "Telegram",
                        tint = NavyDark
                    )
                    Spacer(modifier = Modifier.width(8.dp))
                    Text(
                        "Join Telegram Group (@ZeroErrorEnglish)",
                        style = MaterialTheme.typography.labelLarge.copy(
                            fontWeight = FontWeight.Bold,
                            color = NavyDark
                        )
                    )
                }

                Spacer(modifier = Modifier.height(8.dp))

                OutlinedButton(
                    onClick = {
                        val intent = Intent(Intent.ACTION_VIEW, Uri.parse("https://whatsapp.com/channel/example"))
                        context.startActivity(intent)
                    },
                    modifier = Modifier.fillMaxWidth(),
                    shape = RoundedCornerShape(12.dp)
                ) {
                    Icon(
                        imageVector = Icons.Default.Share,
                        contentDescription = "WhatsApp",
                        tint = MaterialTheme.colorScheme.primary
                    )
                    Spacer(modifier = Modifier.width(8.dp))
                    Text("Join WhatsApp Channel")
                }
            }
        }

        // App Information
        item {
            Column(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(horizontal = 16.dp, vertical = 8.dp),
                horizontalAlignment = Alignment.CenterHorizontally
            ) {
                Text(
                    text = "ZeroErrorEnglish v1.0 • Built with Jetpack Compose",
                    style = MaterialTheme.typography.labelSmall.copy(
                        color = MaterialTheme.colorScheme.onSurfaceVariant
                    )
                )
                Text(
                    text = "© 2026 ZeroErrorEnglish. All rights reserved.",
                    style = MaterialTheme.typography.labelSmall.copy(
                        color = MaterialTheme.colorScheme.onSurfaceVariant
                    )
                )
            }
        }
    }
}


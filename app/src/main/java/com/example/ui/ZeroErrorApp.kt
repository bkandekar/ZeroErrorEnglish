package com.example.ui

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.MenuBook
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.data.Book
import com.example.data.Lesson
import com.example.ui.screens.*
import com.example.ui.theme.*

enum class AppTab(val label: String) {
    HOME("Home"),
    BOOKS("16 Books"),
    LESSONS("Guides"),
    QUIZZES("Traps"),
    FORMULAS("Formulas"),
    MENTOR("Mentor")
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun ZeroErrorApp() {
    var selectedTab by remember { mutableStateOf(AppTab.HOME) }
    var selectedBookForSheet by remember { mutableStateOf<Book?>(null) }
    var selectedLessonForDetail by remember { mutableStateOf<Lesson?>(null) }
    var isLabOpen by remember { mutableStateOf(false) }

    Scaffold(
        topBar = {
            TopAppBar(
                title = {
                    Row(verticalAlignment = Alignment.CenterVertically) {
                        Box(
                            modifier = Modifier
                                .size(28.dp)
                                .clip(CircleShape)
                                .background(GoldAccent),
                            contentAlignment = Alignment.Center
                        ) {
                            Text(
                                text = "Z",
                                style = MaterialTheme.typography.titleMedium.copy(
                                    fontWeight = FontWeight.ExtraBold,
                                    color = NavyDark
                                )
                            )
                        }
                        Spacer(modifier = Modifier.width(10.dp))
                        Column {
                            Text(
                                text = "ZeroErrorEnglish",
                                style = MaterialTheme.typography.titleMedium.copy(
                                    fontWeight = FontWeight.Bold,
                                    color = Color.White
                                )
                            )
                            Text(
                                text = "22-Year Bracket Method",
                                style = MaterialTheme.typography.labelSmall.copy(
                                    color = GoldLight,
                                    fontSize = 10.sp
                                )
                            )
                        }
                    }
                },
                colors = TopAppBarDefaults.topAppBarColors(
                    containerColor = NavyDark
                )
            )
        },
        bottomBar = {
            NavigationBar(
                containerColor = MaterialTheme.colorScheme.surface,
                tonalElevation = 8.dp
            ) {
                NavigationBarItem(
                    selected = selectedTab == AppTab.HOME && !isLabOpen,
                    onClick = {
                        selectedTab = AppTab.HOME
                        selectedLessonForDetail = null
                        isLabOpen = false
                    },
                    icon = {
                        Icon(
                            imageVector = Icons.Default.Home,
                            contentDescription = "Home"
                        )
                    },
                    label = { Text("Home", fontSize = 11.sp) },
                    colors = NavigationBarItemDefaults.colors(
                        selectedIconColor = MaterialTheme.colorScheme.primary,
                        selectedTextColor = MaterialTheme.colorScheme.primary,
                        indicatorColor = MaterialTheme.colorScheme.primaryContainer.copy(alpha = 0.5f)
                    )
                )

                NavigationBarItem(
                    selected = selectedTab == AppTab.BOOKS && !isLabOpen,
                    onClick = {
                        selectedTab = AppTab.BOOKS
                        selectedLessonForDetail = null
                        isLabOpen = false
                    },
                    icon = {
                        Icon(
                            imageVector = Icons.AutoMirrored.Filled.MenuBook,
                            contentDescription = "Books"
                        )
                    },
                    label = { Text("16 Books", fontSize = 11.sp) },
                    colors = NavigationBarItemDefaults.colors(
                        selectedIconColor = MaterialTheme.colorScheme.primary,
                        selectedTextColor = MaterialTheme.colorScheme.primary,
                        indicatorColor = MaterialTheme.colorScheme.primaryContainer.copy(alpha = 0.5f)
                    )
                )

                NavigationBarItem(
                    selected = selectedTab == AppTab.LESSONS && !isLabOpen,
                    onClick = {
                        selectedTab = AppTab.LESSONS
                        isLabOpen = false
                    },
                    icon = {
                        Icon(
                            imageVector = Icons.Default.School,
                            contentDescription = "Lessons"
                        )
                    },
                    label = { Text("Guides", fontSize = 11.sp) },
                    colors = NavigationBarItemDefaults.colors(
                        selectedIconColor = MaterialTheme.colorScheme.primary,
                        selectedTextColor = MaterialTheme.colorScheme.primary,
                        indicatorColor = MaterialTheme.colorScheme.primaryContainer.copy(alpha = 0.5f)
                    )
                )

                NavigationBarItem(
                    selected = selectedTab == AppTab.QUIZZES && !isLabOpen,
                    onClick = {
                        selectedTab = AppTab.QUIZZES
                        selectedLessonForDetail = null
                        isLabOpen = false
                    },
                    icon = {
                        Icon(
                            imageVector = Icons.Default.CheckCircle,
                            contentDescription = "Traps"
                        )
                    },
                    label = { Text("Traps", fontSize = 11.sp) },
                    colors = NavigationBarItemDefaults.colors(
                        selectedIconColor = MaterialTheme.colorScheme.primary,
                        selectedTextColor = MaterialTheme.colorScheme.primary,
                        indicatorColor = MaterialTheme.colorScheme.primaryContainer.copy(alpha = 0.5f)
                    )
                )

                NavigationBarItem(
                    selected = selectedTab == AppTab.FORMULAS && !isLabOpen,
                    onClick = {
                        selectedTab = AppTab.FORMULAS
                        selectedLessonForDetail = null
                        isLabOpen = false
                    },
                    icon = {
                        Icon(
                            imageVector = Icons.Default.Lightbulb,
                            contentDescription = "Formulas"
                        )
                    },
                    label = { Text("Formulas", fontSize = 11.sp) },
                    colors = NavigationBarItemDefaults.colors(
                        selectedIconColor = MaterialTheme.colorScheme.primary,
                        selectedTextColor = MaterialTheme.colorScheme.primary,
                        indicatorColor = MaterialTheme.colorScheme.primaryContainer.copy(alpha = 0.5f)
                    )
                )

                NavigationBarItem(
                    selected = selectedTab == AppTab.MENTOR && !isLabOpen,
                    onClick = {
                        selectedTab = AppTab.MENTOR
                        selectedLessonForDetail = null
                        isLabOpen = false
                    },
                    icon = {
                        Icon(
                            imageVector = Icons.Default.Person,
                            contentDescription = "Mentor"
                        )
                    },
                    label = { Text("Mentor", fontSize = 11.sp) },
                    colors = NavigationBarItemDefaults.colors(
                        selectedIconColor = MaterialTheme.colorScheme.primary,
                        selectedTextColor = MaterialTheme.colorScheme.primary,
                        indicatorColor = MaterialTheme.colorScheme.primaryContainer.copy(alpha = 0.5f)
                    )
                )
            }
        }
    ) { innerPadding ->
        Box(
            modifier = Modifier
                .fillMaxSize()
                .padding(innerPadding)
        ) {
            if (isLabOpen) {
                BracketLabScreen(
                    onClose = { isLabOpen = false }
                )
            } else {
                when (selectedTab) {
                    AppTab.HOME -> {
                        HomeScreen(
                            onNavigateToBooks = { selectedTab = AppTab.BOOKS },
                            onNavigateToLessons = { selectedTab = AppTab.LESSONS },
                            onNavigateToQuizzes = { selectedTab = AppTab.QUIZZES },
                            onNavigateToMnemonics = { selectedTab = AppTab.FORMULAS },
                            onNavigateToLab = { isLabOpen = true },
                            onSelectBook = { book -> selectedBookForSheet = book },
                            onSelectLesson = { lesson ->
                                selectedLessonForDetail = lesson
                                selectedTab = AppTab.LESSONS
                            }
                        )
                    }

                    AppTab.BOOKS -> {
                        BooksScreen(
                            onSelectBook = { book -> selectedBookForSheet = book }
                        )
                    }

                    AppTab.LESSONS -> {
                        LessonsScreen(
                            selectedLesson = selectedLessonForDetail,
                            onSelectLesson = { lesson -> selectedLessonForDetail = lesson },
                            onBackToList = { selectedLessonForDetail = null }
                        )
                    }

                    AppTab.QUIZZES -> {
                        QuizzesScreen()
                    }

                    AppTab.FORMULAS -> {
                        MnemonicsScreen()
                    }

                    AppTab.MENTOR -> {
                        MentorScreen()
                    }
                }
            }

            // Book Details Modal BottomSheet
            if (selectedBookForSheet != null) {
                BookDetailSheet(
                    book = selectedBookForSheet!!,
                    onDismiss = { selectedBookForSheet = null }
                )
            }
        }
    }
}

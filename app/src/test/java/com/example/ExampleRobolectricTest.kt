package com.example

import android.content.Context
import androidx.test.core.app.ApplicationProvider
import com.example.data.ZeroErrorDataRepository
import org.junit.Assert.assertEquals
import org.junit.Assert.assertTrue
import org.junit.Test
import org.junit.runner.RunWith
import org.robolectric.RobolectricTestRunner
import org.robolectric.annotation.Config

@RunWith(RobolectricTestRunner::class)
@Config(sdk = [36])
class ExampleRobolectricTest {

    @Test
    fun `read string from context`() {
        val context = ApplicationProvider.getApplicationContext<Context>()
        val appName = context.getString(R.string.app_name)
        assertEquals("ZeroErrorEnglish", appName)
    }

    @Test
    fun `verify books repository loaded`() {
        assertEquals(16, ZeroErrorDataRepository.books.size)
        assertTrue(ZeroErrorDataRepository.quizQuestions.isNotEmpty())
        assertTrue(ZeroErrorDataRepository.mnemonicCards.isNotEmpty())
    }
}

package com.journal.journalws.dto.entry;

import com.journal.journalws.annotation.entry.PrivacyCheck;
import com.journal.journalws.enums.entry.Privacy;

import java.util.UUID;

public class EntryListRequest {

    private final UUID userId;

    @PrivacyCheck
    private final String privacy;

    public EntryListRequest(UUID userId, String privacy) {
        this.userId = userId;
        this.privacy = privacy;
    }

    public UUID getUserId() {
        return userId;
    }

    public Privacy getPrivacy() {
        return Privacy.valueOf(privacy);
    }
}

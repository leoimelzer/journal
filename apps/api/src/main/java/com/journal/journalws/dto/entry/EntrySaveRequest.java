package com.journal.journalws.dto.entry;

import com.journal.journalws.annotation.entry.PrivacyCheck;
import com.journal.journalws.enums.entry.Privacy;
import jakarta.validation.constraints.NotNull;

import java.util.List;
import java.util.UUID;

public class EntrySaveRequest {

    @NotNull
    private final String content;

    private final List<String> tags;

    @NotNull
    @PrivacyCheck
    private final String privacy;

    private final List<UUID> allowedUsers;

    public EntrySaveRequest(String content, List<String> tags, String privacy, List<UUID> allowedUsers) {
        this.content = content;
        this.tags = tags;
        this.privacy = privacy;
        this.allowedUsers = allowedUsers;
    }

    public String getContent() {
        return content;
    }

    public List<String> getTags() {
        return tags;
    }

    public Privacy getPrivacy() {
        return Privacy.valueOf(privacy);
    }

    public List<UUID> getAllowedUsers() {
        return allowedUsers;
    }

}

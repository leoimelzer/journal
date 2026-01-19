package com.journal.api.validation.entry;

import com.journal.api.annotation.entry.PrivacyCheck;
import com.journal.api.enums.entry.Privacy;
import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

import java.util.Set;

public class PrivacyCheckValidator implements ConstraintValidator<PrivacyCheck, String> {

    private static final Set<String> PRIVACY = Privacy.getValueSet();

    @Override
    public boolean isValid(String value, ConstraintValidatorContext context) {
        return value != null && PRIVACY.contains(value);
    }

}
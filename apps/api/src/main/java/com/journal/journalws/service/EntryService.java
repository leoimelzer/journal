package com.journal.journalws.service;

import com.journal.journalws.dto.entry.EntryListRequest;
import com.journal.journalws.dto.entry.EntrySaveRequest;
import com.journal.journalws.enums.entry.Privacy;
import com.journal.journalws.model.Entry;
import com.journal.journalws.repository.EntryRepository;
import com.journal.journalws.repository.UserRepository;
import jakarta.validation.ConstraintViolation;
import jakarta.validation.ConstraintViolationException;
import jakarta.validation.Validator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Set;
import java.util.UUID;

@Service
public class EntryService {

    @Autowired
    Validator validator;

    @Autowired
    private EntryRepository entryRepository;

    @Autowired
    private UserRepository userRepository;

    public Entry get(Long id) {
        return entryRepository.findById(id).orElse(null);
    }

    public List<Entry> list(EntryListRequest request) {
        return entryRepository
                .findAll()
                .stream()
                .filter(entry -> {
                    boolean matches = true;

                    if (request.getUserId() != null) {
                        matches &= request.getUserId().equals(entry.getUserId());
                    }

                    if (request.getPrivacy() != null) {
                        matches &= request.getPrivacy() != null && request.getPrivacy().equals(entry.getPrivacy());
                    }
                    return matches;
                })
                .toList();
    }

    public UUID create(EntrySaveRequest request) {
        Entry entry = new Entry();

        entry.setContent(request.getContent());
        entry.setTags(request.getTags());
        entry.setPrivacy(request.getPrivacy());
        entry.setAllowedUsers(request.getAllowedUsers());

        // TODO: Aqui tem que pegar do usuário dono do token da requisição
        UUID userId = UUID.randomUUID();
        entry.setUserId(userId);

//        entryRepository.findByUserId(userId).ifPresent(e -> {
//            System.out.println(e.getUserId());
//            e.setUserId(e.getUserId());
//        });
        // TODO: END

        Set<ConstraintViolation<Entry>> violations = validator.validate(entry);

        if (!violations.isEmpty()) {
            throw new ConstraintViolationException(violations);
        }

        entryRepository.save(entry);
        return entry.getId();
    }

    public void update(Long id, EntrySaveRequest request) {
        Entry entry = get(id);

        entry.setContent(request.getContent());
        entry.setTags(request.getTags());
        entry.setPrivacy(request.getPrivacy());

        List<UUID> allowedUsers = request.getAllowedUsers();
        entry.setAllowedUsers(allowedUsers);

        Set<ConstraintViolation<Entry>> violations = validator.validate(entry);

        if (!violations.isEmpty()) {
            throw new ConstraintViolationException(violations);
        }

        entryRepository.save(entry);
    }

    public void delete(Long id) {
        Entry entry = get(id);
        entryRepository.delete(entry);
    }
}

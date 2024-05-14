package com.JackBadawy.Trivia_backend.PlayerData;

import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;


@Service
@Transactional
public class PlayerDataService {
	 @Autowired
	    private PlayerDataRepository repo;
	    
	    @Autowired 
	    private ModelMapper mapper;
	    
	    public PlayerData createItem(CreatePlayerDataDTO data) {
	    	
	    	
	    	PlayerData newItem = mapper.map(data, PlayerData.class);
	    	
	    	return this.repo.save(newItem);
	    }
	    
	    public List<PlayerData> getAll() {
	    	return this.repo.findAll();
	    }
	    
	    public Optional<PlayerData> findItemById(Long id) {
	    	return this.repo.findById(id);
	    }
	    
	    public boolean deletePostById(Long id) {
	    	Optional<PlayerData> maybeItem = this.repo.findById(id);
	    	if (maybeItem.isEmpty()) return false;
	    	this.repo.delete(maybeItem.get());
	    	return true;
	    }
}

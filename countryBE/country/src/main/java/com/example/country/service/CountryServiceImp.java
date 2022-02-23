package com.example.country.service;


import com.example.country.model.Country;
import com.example.country.repository.CountryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CountryServiceImp implements CountryService{
    @Autowired
    private CountryRepository countryRepository;

    @Override
    public Country saveCountry(Country country) {
        return countryRepository.save(country);
    }

    @Override
    public List<Country> getAllCounteries() {
        return countryRepository.findAll();
    }

    @Override
    public void delete(int countryId) {
        countryRepository.deleteById(countryId);
    }

    @Override
    public void saveOrUpdate(Country country) {
        countryRepository.save(country);
    }
}

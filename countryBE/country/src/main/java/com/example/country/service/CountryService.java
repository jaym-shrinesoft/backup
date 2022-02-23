package com.example.country.service;


import com.example.country.model.Country;

import java.util.List;

public interface CountryService {
    public Country saveCountry(Country country);
    public List<Country> getAllCounteries();
    void delete(int countryId);
    void saveOrUpdate(Country country);
}
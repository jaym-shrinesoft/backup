package com.example.country.controller;
import com.example.country.model.Country;
import com.example.country.service.CountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/country")
@CrossOrigin
public class CountryController {
    @Autowired
    private CountryService countryService;

    @PostMapping(path = "/add")
    public String add(@RequestBody Country country){
        countryService.saveCountry(country);
        return "New Country is added.";
    }

    @GetMapping("/getAll")
    public List<Country> list(){
        return countryService.getAllCounteries();
    }

    @DeleteMapping("/delete/{id}")
    public String deleteCountry(@PathVariable("id") int id)
    {
        countryService.delete(id);
        return "Item is deleted";
    }

    @PutMapping("/update")
    private Country update(@RequestBody Country country)
    {
        countryService.saveOrUpdate(country);
        return country;
    }
}
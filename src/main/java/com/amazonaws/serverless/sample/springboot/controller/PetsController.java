/*
 * Copyright 2016 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance
 * with the License. A copy of the License is located at
 *
 * http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES
 * OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */
package com.amazonaws.serverless.sample.springboot.controller;



import com.amazonaws.serverless.sample.springboot.model.Pet;
import com.amazonaws.serverless.sample.springboot.model.PetData;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import java.security.Principal;
import java.util.Optional;
import java.util.UUID;


@RestController
@EnableWebMvc
public class PetsController {
    @RequestMapping(path = "/pets", method = RequestMethod.POST)
    public Pet createPet(@RequestBody Pet newPet) {
        if (newPet.getName() == null || newPet.getBreed() == null) {
            return null;
        }

        Pet dbPet = newPet;
        dbPet.setId(UUID.randomUUID().toString());
        return dbPet;
    }

 @RequestMapping(path = "/pets2", method = RequestMethod.GET)
    public Pet[] listPets2(@RequestParam("limit") Optional<Integer> limit, Principal principal) {
        int queryLimit = 10;
        if (limit.isPresent()) {
            queryLimit = limit.get();
        }

        Pet[] outputPets = new Pet[queryLimit];

        for (int i = 0; i < queryLimit; i++) {
            Pet newPet = new Pet();
            newPet.setId(UUID.randomUUID().toString());
            newPet.setName(PetData.getRandomName());
            newPet.setBreed(PetData.getRandomBreed());
            newPet.setDateOfBirth(PetData.getRandomDoB());
            outputPets[i] = newPet;
        }

        return outputPets;
    }

    @RequestMapping(path = "/pets", method = RequestMethod.GET)
    public Pet[] listPets(@RequestParam("limit") Optional<Integer> limit, Principal principal) {
        int queryLimit = 10;
        if (limit.isPresent()) {
            queryLimit = limit.get();
        }

        Pet[] outputPets = new Pet[queryLimit];

		Pet newPet1 = new Pet();
        newPet1.setId(UUID.randomUUID().toString());
        newPet1.setName("GREENUPDATED");
        newPet1.setBreed(PetData.getRandomBreed());
        newPet1.setDateOfBirth(PetData.getRandomDoB());
        outputPets[0] = newPet1;
			
        for (int i = 1; i < queryLimit; i++) {
            Pet newPet = new Pet();
            newPet.setId(UUID.randomUUID().toString());
            newPet.setName(PetData.getRandomName());
            newPet.setBreed(PetData.getRandomBreed());
            newPet.setDateOfBirth(PetData.getRandomDoB());
            outputPets[i] = newPet;
        }

        return outputPets;
    }

    @RequestMapping(path = "/pets/{petId}", method = RequestMethod.GET)
    public Pet listPets(@PathVariable(value = "id") String id) {
        Pet newPet = new Pet();
        newPet.setId(UUID.randomUUID().toString());
        newPet.setBreed(PetData.getRandomBreed());
        newPet.setDateOfBirth(PetData.getRandomDoB());
        newPet.setName(PetData.getRandomName());
        return newPet;
    }

}

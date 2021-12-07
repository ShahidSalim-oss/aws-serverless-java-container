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

import com.amazonaws.serverless.sample.springboot.model.DataCreater;
import de.logitive.convertien.query.controller.api.Event;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import java.security.Principal;
import java.util.List;
import java.util.Optional;
import java.util.UUID;


@RestController
@EnableWebMvc
public class QueryController {
    @RequestMapping(path = "/events", method = RequestMethod.POST)
    public Event createPet(@RequestBody Event event) {
        event.setId(UUID.randomUUID().toString());
        return event;
    }

    @RequestMapping(path = "/events", method = RequestMethod.GET)
    public List<Event> listPets(@RequestParam("limit") Optional<Integer> limit, Principal principal) {
        return DataCreater.createEventList();
    }

    @RequestMapping(path = "/events/{eventId}", method = RequestMethod.GET)
    public Event event(@PathVariable(value = "eventId") String id) {
        return DataCreater.createEvent();
    }

}

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
package com.amazonaws.serverless.sample.springboot.model;


import de.logitive.convertien.query.controller.api.Event;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.*;
import java.util.concurrent.ThreadLocalRandom;


public class DataCreater {

    private static List<String> eventnames = new ArrayList<>();
    static {
        eventnames.add("CLICKED");
        eventnames.add("VIEWED");
        eventnames.add("ADD_TO_CART");
        eventnames.add("REMOVED_FROM_CART");
        eventnames.add("ORDERED");
        eventnames.add("RETURNED");
    }

    public static Event createEvent() {
        Event event = new Event();
        event.setId(UUID.randomUUID().toString());
        event.setName(DataCreater.getRandomEventName());
        event.setUserId(UUID.randomUUID().toString());
        event.setItemId(UUID.randomUUID().toString());
        return event;
    }

    public static List<Event> createEventList(){
        List<Event> eventList = new ArrayList<>();
        for (int i = 1; i <=  10; i++) {
            eventList.add(createEvent());
        }
        return eventList;
    }

    public static String getRandomEventName() {
        return eventnames.get(ThreadLocalRandom.current().nextInt(0, eventnames.size() - 1));
    }

    public static Date getRandomDoB() {
        GregorianCalendar gc = new GregorianCalendar();

        int year = ThreadLocalRandom.current().nextInt(
                Calendar.getInstance().get(Calendar.YEAR) - 15,
                Calendar.getInstance().get(Calendar.YEAR)
        );

        gc.set(Calendar.YEAR, year);

        int dayOfYear = ThreadLocalRandom.current().nextInt(1, gc.getActualMaximum(Calendar.DAY_OF_YEAR));

        gc.set(Calendar.DAY_OF_YEAR, dayOfYear);
        return gc.getTime();
    }
}

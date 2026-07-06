package com.cognizant.jpademo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import com.cognizant.jpademo.model.Employee;
import com.cognizant.jpademo.service.EmployeeService;

@SpringBootApplication
public class JpaDemoApplication {

    public static void main(String[] args) {

        ApplicationContext context =
                SpringApplication.run(JpaDemoApplication.class, args);

        EmployeeService service =
                context.getBean(EmployeeService.class);

        Employee employee =
                new Employee(101,"Keerthiga",50000);

        service.addEmployee(employee);

    }

}
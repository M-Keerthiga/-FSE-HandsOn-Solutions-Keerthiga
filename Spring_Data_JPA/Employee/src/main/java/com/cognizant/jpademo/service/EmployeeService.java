package com.cognizant.jpademo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.jpademo.model.Employee;
import com.cognizant.jpademo.repository.EmployeeRepository;

import jakarta.transaction.Transactional;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Transactional
    public void addEmployee(Employee employee){

        employeeRepository.save(employee);

        System.out.println("Employee Saved Successfully");

    }

}
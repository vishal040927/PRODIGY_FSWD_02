package project.authsystem.service;

import java.util.List;

import project.authsystem.dto.EmployeeRequest;
import project.authsystem.entity.Employee;

public interface EmployeeService {

    Employee addEmployee(EmployeeRequest request);

    List<Employee> getAllEmployees();

    Employee getEmployee(Long id);

    Employee updateEmployee(Long id, EmployeeRequest request);

    void deleteEmployee(Long id);
}
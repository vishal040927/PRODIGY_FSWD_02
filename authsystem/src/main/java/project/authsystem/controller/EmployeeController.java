package project.authsystem.controller;

import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;

import project.authsystem.dto.EmployeeRequest;
import project.authsystem.entity.Employee;
import project.authsystem.service.EmployeeService;

import java.util.List;

@RestController
@RequestMapping("/api/employees")
@RequiredArgsConstructor
public class EmployeeController {

    private final EmployeeService service;

    @PostMapping
    public Employee addEmployee(@Valid @RequestBody EmployeeRequest request) {
        return service.addEmployee(request);
    }

    @GetMapping
    public List<Employee> getAllEmployees() {
        return service.getAllEmployees();
    }

    @GetMapping("/{id}")
    public Employee getEmployee(@PathVariable Long id) {
        return service.getEmployee(id);
    }

    @PutMapping("/{id}")
    public Employee updateEmployee(
            @PathVariable Long id,
            @Valid @RequestBody EmployeeRequest request) {

        return service.updateEmployee(id, request);
    }

    @DeleteMapping("/{id}")
    public String deleteEmployee(@PathVariable Long id) {

        service.deleteEmployee(id);

        return "Employee Deleted Successfully";
    }
}
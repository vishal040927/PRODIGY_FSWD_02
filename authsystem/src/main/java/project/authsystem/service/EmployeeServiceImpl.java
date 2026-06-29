package project.authsystem.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import project.authsystem.dto.EmployeeRequest;
import project.authsystem.entity.Employee;
import project.authsystem.repository.EmployeeRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    private final EmployeeRepository repository;

    @Override
    public Employee addEmployee(EmployeeRequest request) {

        Employee employee = Employee.builder()
                .employeeId(request.getEmployeeId())
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .email(request.getEmail())
                .phone(request.getPhone())
                .department(request.getDepartment())
                .designation(request.getDesignation())
                .salary(request.getSalary())
                .joiningDate(request.getJoiningDate())
                .status(request.getStatus())
                .build();

        return repository.save(employee);
    }

    @Override
    public List<Employee> getAllEmployees() {
        return repository.findAll();
    }

    @Override
    public Employee getEmployee(Long id) {
        return repository.findById(id).orElseThrow();
    }

    @Override
    public Employee updateEmployee(Long id, EmployeeRequest request) {

        Employee employee = repository.findById(id).orElseThrow();

        employee.setEmployeeId(request.getEmployeeId());
        employee.setFirstName(request.getFirstName());
        employee.setLastName(request.getLastName());
        employee.setEmail(request.getEmail());
        employee.setPhone(request.getPhone());
        employee.setDepartment(request.getDepartment());
        employee.setDesignation(request.getDesignation());
        employee.setSalary(request.getSalary());
        employee.setJoiningDate(request.getJoiningDate());
        employee.setStatus(request.getStatus());

        return repository.save(employee);
    }

    @Override
    public void deleteEmployee(Long id) {
        repository.deleteById(id);
    }
}
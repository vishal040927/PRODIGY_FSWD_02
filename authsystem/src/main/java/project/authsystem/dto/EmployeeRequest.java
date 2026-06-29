package project.authsystem.dto;

import java.time.LocalDate;

import jakarta.validation.constraints.*;
import lombok.Data;

@Data
public class EmployeeRequest {

    @NotBlank
    private String employeeId;

    @NotBlank
    private String firstName;

    @NotBlank
    private String lastName;

    @Email
    private String email;

    @NotBlank
    private String phone;

    @NotBlank
    private String department;

    @NotBlank
    private String designation;

    @NotNull
    private Double salary;

    @NotNull
    private LocalDate joiningDate;

    @NotBlank
    private String status;
}
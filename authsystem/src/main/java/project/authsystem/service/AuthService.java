package project.authsystem.service;

import project.authsystem.dto.AuthResponse;
import project.authsystem.dto.LoginRequest;
import project.authsystem.dto.RegisterRequest;

public interface AuthService {

    String register(RegisterRequest request);

    AuthResponse login(LoginRequest request);
}
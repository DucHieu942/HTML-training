package net.mcceras.authapi.repositories;

import net.mcceras.authapi.entities.ERole;
import net.mcceras.authapi.entities.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {

}

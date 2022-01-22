package com.example.accessingdatamysql.repository;

import com.example.accessingdatamysql.models.Equipment;
import org.springframework.data.jpa.repository.JpaRepository;


public interface EquipmentRepository extends JpaRepository<Equipment, Long> {

}

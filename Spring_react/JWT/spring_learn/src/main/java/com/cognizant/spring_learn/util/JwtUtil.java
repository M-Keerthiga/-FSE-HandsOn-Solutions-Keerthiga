package com.cognizant.spring_learn.util;

import java.security.Key;
import java.util.Date;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

public class JwtUtil {

    private static final Key KEY =
            Keys.hmacShaKeyFor("abcdefghijklmnopqrstuvwxyz123456".getBytes());

    public static String generateToken(String username) {

        return Jwts.builder()
                .setSubject(username)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis()+3600000))
                .signWith(KEY, SignatureAlgorithm.HS256)
                .compact();

    }

}
package com.kob.backend.Config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@Configuration
public class ConfigCors {

    @Bean
    public CorsFilter corsFilter() {
        // 添加 CORS 配置信息
        CorsConfiguration config = new CorsConfiguration();
        // 允许的原始域
        config.addAllowedOriginPattern("*"); // 使用 allowedOriginPatterns
        // 是否发送 Cookie
        config.setAllowCredentials(true);
        // 允许的请求方式
        config.addAllowedMethod("*");
        // 允许的原始请求头部信息
        config.addAllowedHeader("*");
        // 暴露的头部信息
        config.addExposedHeader("*");

        // 添加映射路径
        UrlBasedCorsConfigurationSource corsConfigurationSource = new UrlBasedCorsConfigurationSource();
        corsConfigurationSource.registerCorsConfiguration("/**", config);
        // 返回新的 CorsFilter
        return new CorsFilter(corsConfigurationSource);
    }
}

<?php

namespace App\Enums;

/**
 * Represent the user's role.
 */
enum UserRoles
{
    case ADMIN;
    case MODERATOR;
    case USER;
}

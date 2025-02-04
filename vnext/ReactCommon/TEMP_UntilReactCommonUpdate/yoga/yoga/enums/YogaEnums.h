/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#pragma once

#include <type_traits>

namespace facebook::yoga {

template <typename EnumT>
constexpr inline int32_t ordinalCount();

template <typename EnumT>
constexpr inline int32_t bitCount();

// Polyfill of C++ 23 to_underlying()
// https://en.cppreference.com/w/cpp/utility/to_underlying
template <typename T>
constexpr auto to_underlying(T e) noexcept {
  return static_cast<std::underlying_type_t<decltype(e)>>(e);
}

} // namespace facebook::yoga

'use client'

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import ReactCountryFlag from "react-country-flag"
import { getNames, getCode } from "country-list"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface CountrySelectProps {
  value: string
  onChange: (value: string) => void
  error?: any
}

export function CountrySelect({ value, onChange, error }: CountrySelectProps) {
  const [open, setOpen] = React.useState(false)
  const countries = getNames()

  return (
    <div className="space-y-2">
      <label className="form-label">Country</label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className={cn(
              "country-select-trigger",
              error && "border-red-500"
            )}
          >
            {value ? (
              <div className="flex items-center gap-2">
                <ReactCountryFlag
                  countryCode={getCode(value) || ""}
                  svg
                  style={{
                    width: '1.5em',
                    height: '1.5em',
                  }}
                />
                <span>{value}</span>
              </div>
            ) : (
              "Select country..."
            )}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0 bg-gray-800 border-gray-600">
          <Command className="bg-gray-800">
            <CommandInput 
              placeholder="Search country..." 
              className="country-select-input"
            />
            <CommandList className="max-h-[300px]">
              <CommandEmpty className="country-select-empty">
                No country found.
              </CommandEmpty>
              <CommandGroup>
                {countries.map((country) => {
                  const countryCode = getCode(country)
                  return (
                    <CommandItem
                      key={country}
                      value={country}
                      onSelect={(currentValue) => {
                        onChange(currentValue === value ? "" : currentValue)
                        setOpen(false)
                      }}
                      className="country-select-item"
                    >
                      <ReactCountryFlag
                        countryCode={countryCode || ""}
                        svg
                        style={{
                          width: '1.5em',
                          height: '1.5em',
                          marginRight: '0.5rem',
                        }}
                      />
                      {country}
                      <Check
                        className={cn(
                          "ml-auto h-4 w-4",
                          value === country ? "opacity-100" : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  )
                })}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      {error && <p className="text-red-500 text-sm">{error.message}</p>}
    </div>
  )
}

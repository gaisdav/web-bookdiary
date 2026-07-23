export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.12 (cd3cf9e)"
  }
  public: {
    Tables: {
      book_contributors: {
        Row: {
          book_id: string
          created_at: string
          id: string
          role: Database["public"]["Enums"]["contributor_role"]
          user_id: number
        }
        Insert: {
          book_id: string
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["contributor_role"]
          user_id: number
        }
        Update: {
          book_id?: string
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["contributor_role"]
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "book_contributors_book_id_fkey"
            columns: ["book_id"]
            isOneToOne: false
            referencedRelation: "books"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "book_contributors_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      book_notes: {
        Row: {
          book_provider_id: string
          content: string
          created_at: string
          id: string
          updated_at: string | null
          user_id: number
        }
        Insert: {
          book_provider_id: string
          content: string
          created_at?: string
          id?: string
          updated_at?: string | null
          user_id: number
        }
        Update: {
          book_provider_id?: string
          content?: string
          created_at?: string
          id?: string
          updated_at?: string | null
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "book_notes_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      book_reviews: {
        Row: {
          book_provider_id: string
          content: string
          created_at: string
          id: number
          is_spoiler: boolean | null
          updated_at: string | null
          user_id: number
        }
        Insert: {
          book_provider_id: string
          content: string
          created_at?: string
          id?: number
          is_spoiler?: boolean | null
          updated_at?: string | null
          user_id: number
        }
        Update: {
          book_provider_id?: string
          content?: string
          created_at?: string
          id?: number
          is_spoiler?: boolean | null
          updated_at?: string | null
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "book_reviews_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      books: {
        Row: {
          authors: string[] | null
          cover_url: string | null
          created_at: string | null
          description: string | null
          id: string
          provider_id: string | null
          published_at: string | null
          publisher: string | null
          source: Database["public"]["Enums"]["book_source"]
          status: Database["public"]["Enums"]["book_status"]
          title: string
          updated_at: string | null
        }
        Insert: {
          authors?: string[] | null
          cover_url?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          provider_id?: string | null
          published_at?: string | null
          publisher?: string | null
          source: Database["public"]["Enums"]["book_source"]
          status?: Database["public"]["Enums"]["book_status"]
          title: string
          updated_at?: string | null
        }
        Update: {
          authors?: string[] | null
          cover_url?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          provider_id?: string | null
          published_at?: string | null
          publisher?: string | null
          source?: Database["public"]["Enums"]["book_source"]
          status?: Database["public"]["Enums"]["book_status"]
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      follows: {
        Row: {
          created_at: string | null
          followed_id: number
          follower_id: number
          id: number
        }
        Insert: {
          created_at?: string | null
          followed_id: number
          follower_id: number
          id?: number
        }
        Update: {
          created_at?: string | null
          followed_id?: number
          follower_id?: number
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "follows_followed_id_fkey"
            columns: ["followed_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "follows_follower_id_fkey"
            columns: ["follower_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      list_items: {
        Row: {
          book_provider_id: string
          created_at: string
          id: number
          list_id: number
        }
        Insert: {
          book_provider_id: string
          created_at?: string
          id?: number
          list_id: number
        }
        Update: {
          book_provider_id?: string
          created_at?: string
          id?: number
          list_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "list_items_list_id_fkey"
            columns: ["list_id"]
            isOneToOne: false
            referencedRelation: "user_lists"
            referencedColumns: ["id"]
          },
        ]
      }
      user_books: {
        Row: {
          book_provider_id: string
          created_at: string | null
          diary_activity_at: string | null
          finished_at: string | null
          id: number
          liked_at: string | null
          rating: number | null
          started_at: string | null
          status: Database["public"]["Enums"]["user_book_status"] | null
          updated_at: string | null
          user_id: number
        }
        Insert: {
          book_provider_id: string
          created_at?: string | null
          diary_activity_at?: string | null
          finished_at?: string | null
          id?: number
          liked_at?: string | null
          rating?: number | null
          started_at?: string | null
          status?: Database["public"]["Enums"]["user_book_status"] | null
          updated_at?: string | null
          user_id: number
        }
        Update: {
          book_provider_id?: string
          created_at?: string | null
          diary_activity_at?: string | null
          finished_at?: string | null
          id?: number
          liked_at?: string | null
          rating?: number | null
          started_at?: string | null
          status?: Database["public"]["Enums"]["user_book_status"] | null
          updated_at?: string | null
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "user_books_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      user_lists: {
        Row: {
          created_at: string
          description: string | null
          id: number
          title: string
          updated_at: string | null
          user_id: number
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: number
          title: string
          updated_at?: string | null
          user_id: number
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: number
          title?: string
          updated_at?: string | null
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "user_lists_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          avatar_url: string | null
          bio: string | null
          created_at: string | null
          deleted_at: string | null
          email: string
          followers_count: number | null
          following_count: number | null
          full_name: string
          id: number
          provider_id: string
          updated_at: string | null
          username: string
        }
        Insert: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string | null
          deleted_at?: string | null
          email: string
          followers_count?: number | null
          following_count?: number | null
          full_name: string
          id?: number
          provider_id: string
          updated_at?: string | null
          username: string
        }
        Update: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string | null
          deleted_at?: string | null
          email?: string
          followers_count?: number | null
          following_count?: number | null
          full_name?: string
          id?: number
          provider_id?: string
          updated_at?: string | null
          username?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      generate_unique_username: { Args: { p_email: string }; Returns: string }
    }
    Enums: {
      book_source: "manual" | "google"
      book_status: "pending" | "approved" | "rejected"
      contributor_role: "owner" | "editor"
      user_book_status: "read" | "reading" | "want-to-read"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      book_source: ["manual", "google"],
      book_status: ["pending", "approved", "rejected"],
      contributor_role: ["owner", "editor"],
      user_book_status: ["read", "reading", "want-to-read"],
    },
  },
} as const
